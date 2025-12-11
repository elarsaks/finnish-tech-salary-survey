import * as ort from "onnxruntime-web";
import { SalaryFormData } from "./types";

// Feature order from the model metadata
const FEATURE_ORDER = [
  "experience_years",
  "office_time_percent",
  "source_language_fi",
  "age_21-25",
  "age_26-30",
  "age_31-35",
  "age_36-40",
  "age_41-45",
  "age_46-50",
  "age_51-55",
  "age_> 55v",
  "age_unknown",
  "gender_male",
  "gender_other",
  "gender_unknown",
  "company_type_consulting",
  "company_type_digitoimisto",
  "company_type_henkilöstövuokraus (aka konsulttitalo)",
  "company_type_julkinen tai kolmas sektori",
  "company_type_konsulttitalo, jolla on omaa tuotebisnestä",
  "company_type_konsulttitalossa",
  "company_type_mainostoimisto",
  "company_type_oma softa, oma rauta ja niiden yhteispeli, ei toista ilman toista",
  "company_type_product company with software as their core business",
  "company_type_tuotetalossa, jonka core-bisnes on softa",
  "company_type_unknown",
  "company_type_ylläpitotalossa",
  "company_type_yrityksessä, jossa softa on tukeva toiminto (esim pankit, terveysala, yms)",
  "role_group_data / ml / analytics",
  "role_group_design / ux",
  "role_group_devops / infrastructure",
  "role_group_junior developer",
  "role_group_lead developer",
  "role_group_management / leadership",
  "role_group_other",
  "role_group_product / project",
  "role_group_senior developer",
  "role_group_software developer / engineer",
  "education_level_master",
  "education_level_other",
  "education_level_phd",
  "education_level_secondary or less",
  "education_level_unknown",
  "education_level_vocational",
  "location_category_rest of finland",
];

let session: ort.InferenceSession | null = null;

export async function loadModel(): Promise<void> {
  if (session) return;

  // Use CDN for WASM files to avoid Vite bundling issues
  ort.env.wasm.wasmPaths =
    "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/";
  // Disable multi-threading to avoid SharedArrayBuffer issues
  ort.env.wasm.numThreads = 1;

  session = await ort.InferenceSession.create("/salary_predictor_v1.0.0.onnx", {
    executionProviders: ["wasm"],
  });
}

export function encodeFormData(formData: SalaryFormData): Float32Array {
  const features = new Float32Array(45);

  // Initialize all features to 0
  features.fill(0);

  // Set numeric features
  const featureMap: Record<string, number> = {};

  // Numeric features
  featureMap["experience_years"] = formData.experienceYears;
  featureMap["office_time_percent"] = formData.officeTimePercent;

  // Source language (one-hot: only fi is encoded, en is the reference)
  featureMap["source_language_fi"] = formData.sourceLanguage === "fi" ? 1 : 0;

  // Age (one-hot encoding, 21-25 is reference/dropped)
  const ageFeatures = [
    "21-25",
    "26-30",
    "31-35",
    "36-40",
    "41-45",
    "46-50",
    "51-55",
    "> 55v",
    "unknown",
  ];
  ageFeatures.forEach((age) => {
    featureMap[`age_${age}`] = formData.age === age ? 1 : 0;
  });

  // Gender (one-hot encoding, female is reference/dropped)
  featureMap["gender_male"] = formData.gender === "male" ? 1 : 0;
  featureMap["gender_other"] = formData.gender === "other" ? 1 : 0;
  featureMap["gender_unknown"] = formData.gender === "unknown" ? 1 : 0;

  // Company type (one-hot encoding)
  const companyTypes = [
    "consulting",
    "digitoimisto",
    "henkilöstövuokraus (aka konsulttitalo)",
    "julkinen tai kolmas sektori",
    "konsulttitalo, jolla on omaa tuotebisnestä",
    "konsulttitalossa",
    "mainostoimisto",
    "oma softa, oma rauta ja niiden yhteispeli, ei toista ilman toista",
    "product company with software as their core business",
    "tuotetalossa, jonka core-bisnes on softa",
    "unknown",
    "ylläpitotalossa",
    "yrityksessä, jossa softa on tukeva toiminto (esim pankit, terveysala, yms)",
  ];
  companyTypes.forEach((type) => {
    featureMap[`company_type_${type}`] = formData.companyType === type ? 1 : 0;
  });

  // Role group (one-hot encoding)
  const roleGroups = [
    "data / ml / analytics",
    "design / ux",
    "devops / infrastructure",
    "junior developer",
    "lead developer",
    "management / leadership",
    "other",
    "product / project",
    "senior developer",
    "software developer / engineer",
  ];
  roleGroups.forEach((role) => {
    featureMap[`role_group_${role}`] = formData.roleGroup === role ? 1 : 0;
  });

  // Education level (one-hot encoding, bachelor is reference/dropped)
  const educationLevels = [
    "master",
    "other",
    "phd",
    "secondary or less",
    "unknown",
    "vocational",
  ];
  educationLevels.forEach((level) => {
    featureMap[`education_level_${level}`] =
      formData.educationLevel === level ? 1 : 0;
  });

  // Location category (one-hot encoding, capital region is reference/dropped)
  featureMap["location_category_rest of finland"] =
    formData.locationCategory === "rest of finland" ? 1 : 0;

  // Map features to the correct order
  FEATURE_ORDER.forEach((featureName, index) => {
    features[index] = featureMap[featureName] ?? 0;
  });

  return features;
}

export async function predictSalary(formData: SalaryFormData): Promise<number> {
  if (!session) {
    await loadModel();
  }

  if (!session) {
    throw new Error("Failed to load model");
  }

  const inputData = encodeFormData(formData);
  const tensor = new ort.Tensor("float32", inputData, [1, 45]);

  const results = await session.run({ float_input: tensor });
  const prediction = results.variable.data[0] as number;

  return Math.round(prediction);
}
