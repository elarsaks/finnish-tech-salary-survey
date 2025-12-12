import * as ort from "onnxruntime-web";
import { SalaryFormData } from "./types";

// Feature order from the model metadata
const FEATURE_ORDER = [
  "experience_years",
  "office_time_percent",
  "source_language_fi",
  "age_26_30",
  "age_31_35",
  "age_36_40",
  "age_41_45",
  "age_46_50",
  "age_51_55",
  "age_55_plus",
  "age_unknown",
  "gender_male",
  "gender_other",
  "gender_unknown",
  "company_type_en_consulting",
  "company_type_en_enterprise",
  "company_type_en_maintenance",
  "company_type_en_product_company",
  "company_type_en_public_sector",
  "company_type_en_unknown",
  "role_group_data_ml_analytics",
  "role_group_design_ux",
  "role_group_devops_infrastructure",
  "role_group_junior_developer",
  "role_group_lead_developer",
  "role_group_management_leadership",
  "role_group_other",
  "role_group_product_project",
  "role_group_senior_developer",
  "role_group_software_developer_engineer",
  "education_level_master",
  "education_level_other",
  "education_level_phd",
  "education_level_secondary_or_less",
  "education_level_unknown",
  "education_level_vocational",
  "location_category_rest_of_finland",
];

let session: ort.InferenceSession | null = null;

export async function loadModel(): Promise<void> {
  if (session) return;

  // Use CDN for WASM files to avoid Vite bundling issues
  ort.env.wasm.wasmPaths =
    "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.23.2/dist/";
  // Disable multi-threading to avoid SharedArrayBuffer issues
  ort.env.wasm.numThreads = 1;

  // Use BASE_URL for GitHub Pages compatibility
  const modelPath = `${import.meta.env.BASE_URL}salary_predictor_v1.0.0.onnx`;

  session = await ort.InferenceSession.create(modelPath, {
    executionProviders: ["wasm"],
  });
}

export function encodeFormData(formData: SalaryFormData): Float32Array {
  const features = new Float32Array(FEATURE_ORDER.length);

  // Initialize all features to 0
  features.fill(0);

  // Set numeric features
  const featureMap: Record<string, number> = {};

  // Numeric features
  featureMap["experience_years"] = formData.experienceYears;
  featureMap["office_time_percent"] = formData.officeTimePercent;

  // Source language (one-hot: only fi is encoded, en is the reference)
  featureMap["source_language_fi"] = formData.sourceLanguage === "fi" ? 1 : 0;

  // Age (one-hot encoding, 21_25 is reference/dropped)
  const ageFeatures = [
    "26_30",
    "31_35",
    "36_40",
    "41_45",
    "46_50",
    "51_55",
    "55_plus",
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
    "enterprise",
    "maintenance",
    "product_company",
    "public_sector",
    "unknown",
  ];
  companyTypes.forEach((type) => {
    featureMap[`company_type_en_${type}`] =
      formData.companyType === type ? 1 : 0;
  });

  // Role group (one-hot encoding)
  const roleGroups = [
    "data_ml_analytics",
    "design_ux",
    "devops_infrastructure",
    "junior_developer",
    "lead_developer",
    "management_leadership",
    "other",
    "product_project",
    "senior_developer",
    "software_developer_engineer",
  ];
  roleGroups.forEach((role) => {
    featureMap[`role_group_${role}`] = formData.roleGroup === role ? 1 : 0;
  });

  // Education level (one-hot encoding, bachelor is reference/dropped)
  const educationLevels = [
    "master",
    "other",
    "phd",
    "secondary_or_less",
    "unknown",
    "vocational",
  ];
  educationLevels.forEach((level) => {
    featureMap[`education_level_${level}`] =
      formData.educationLevel === level ? 1 : 0;
  });

  // Location category (one-hot encoding, capital_region is reference/dropped)
  featureMap["location_category_rest_of_finland"] =
    formData.locationCategory === "rest_of_finland" ? 1 : 0;

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
  console.log("Input data length:", inputData.length);
  console.log("Expected features:", FEATURE_ORDER.length);
  console.log("Form data:", formData);

  const tensor = new ort.Tensor("float32", inputData, [
    1,
    FEATURE_ORDER.length,
  ]);

  const results = await session.run({ float_input: tensor });
  const prediction = results.variable.data[0] as number;

  return Math.round(prediction);
}
