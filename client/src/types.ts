// Form input types matching the model's expected features
export interface SalaryFormData {
  experienceYears: number;
  officeTimePercent: number;
  sourceLanguage: "en" | "fi";
  age:
    | "21-25"
    | "26-30"
    | "31-35"
    | "36-40"
    | "41-45"
    | "46-50"
    | "51-55"
    | "> 55v"
    | "unknown";
  gender: "female" | "male" | "other" | "unknown";
  companyType: string;
  roleGroup: string;
  educationLevel: string;
  locationCategory: "capital region" | "rest of finland";
}

export const AGE_OPTIONS = [
  { value: "21-25", label: "21-25" },
  { value: "26-30", label: "26-30" },
  { value: "31-35", label: "31-35" },
  { value: "36-40", label: "36-40" },
  { value: "41-45", label: "41-45" },
  { value: "46-50", label: "46-50" },
  { value: "51-55", label: "51-55" },
  { value: "> 55v", label: "55+" },
  { value: "unknown", label: "Prefer not to say" },
] as const;

export const GENDER_OPTIONS = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "other", label: "Other" },
  { value: "unknown", label: "Prefer not to say" },
] as const;

export const COMPANY_TYPE_OPTIONS = [
  { value: "consulting", label: "Consulting" },
  { value: "digitoimisto", label: "Digital agency" },
  {
    value: "henkilöstövuokraus (aka konsulttitalo)",
    label: "Staff leasing / Consulting house",
  },
  { value: "julkinen tai kolmas sektori", label: "Public or third sector" },
  {
    value: "konsulttitalo, jolla on omaa tuotebisnestä",
    label: "Consulting with own products",
  },
  { value: "konsulttitalossa", label: "Consulting company" },
  { value: "mainostoimisto", label: "Advertising agency" },
  {
    value: "oma softa, oma rauta ja niiden yhteispeli, ei toista ilman toista",
    label: "Own software + hardware",
  },
  {
    value: "product company with software as their core business",
    label: "Product company (software core)",
  },
  {
    value: "tuotetalossa, jonka core-bisnes on softa",
    label: "Product house (software core)",
  },
  { value: "unknown", label: "Unknown" },
  { value: "ylläpitotalossa", label: "Maintenance company" },
  {
    value:
      "yrityksessä, jossa softa on tukeva toiminto (esim pankit, terveysala, yms)",
    label: "Software as support function (banks, healthcare, etc.)",
  },
] as const;

export const ROLE_GROUP_OPTIONS = [
  { value: "data / ml / analytics", label: "Data / ML / Analytics" },
  { value: "design / ux", label: "Design / UX" },
  { value: "devops / infrastructure", label: "DevOps / Infrastructure" },
  { value: "junior developer", label: "Junior Developer" },
  { value: "lead developer", label: "Lead Developer" },
  { value: "management / leadership", label: "Management / Leadership" },
  { value: "other", label: "Other" },
  { value: "product / project", label: "Product / Project" },
  { value: "senior developer", label: "Senior Developer" },
  {
    value: "software developer / engineer",
    label: "Software Developer / Engineer",
  },
] as const;

export const EDUCATION_LEVEL_OPTIONS = [
  { value: "bachelor", label: "Bachelor's degree" },
  { value: "master", label: "Master's degree" },
  { value: "phd", label: "PhD" },
  { value: "vocational", label: "Vocational degree" },
  { value: "secondary or less", label: "Secondary school or less" },
  { value: "other", label: "Other" },
  { value: "unknown", label: "Prefer not to say" },
] as const;

export const LOCATION_OPTIONS = [
  { value: "capital region", label: "Capital region (Helsinki area)" },
  { value: "rest of finland", label: "Rest of Finland" },
] as const;

export const SOURCE_LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "fi", label: "Finnish" },
] as const;

// Default form values
export const DEFAULT_FORM_DATA: SalaryFormData = {
  experienceYears: 5,
  officeTimePercent: 50,
  sourceLanguage: "en",
  age: "31-35",
  gender: "unknown",
  companyType: "product company with software as their core business",
  roleGroup: "software developer / engineer",
  educationLevel: "bachelor",
  locationCategory: "capital region",
};
