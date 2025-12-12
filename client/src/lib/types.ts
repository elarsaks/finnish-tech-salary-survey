// Form input types matching the model's expected features
export interface SalaryFormData {
  experienceYears: number;
  officeTimePercent: number;
  sourceLanguage: "en" | "fi";
  age:
    | "21_25"
    | "26_30"
    | "31_35"
    | "36_40"
    | "41_45"
    | "46_50"
    | "51_55"
    | "55_plus"
    | "unknown";
  gender: "female" | "male" | "other" | "unknown";
  companyType: string;
  roleGroup: string;
  educationLevel: string;
  locationCategory: "capital_region" | "rest_of_finland";
}

export const AGE_OPTIONS = [
  { value: "21_25", label: "21-25" },
  { value: "26_30", label: "26-30" },
  { value: "31_35", label: "31-35" },
  { value: "36_40", label: "36-40" },
  { value: "41_45", label: "41-45" },
  { value: "46_50", label: "46-50" },
  { value: "51_55", label: "51-55" },
  { value: "55_plus", label: "55+" },
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
  { value: "product_company", label: "Product company" },
  { value: "enterprise", label: "Enterprise (software as support)" },
  { value: "public_sector", label: "Public sector" },
  { value: "agency", label: "Digital/Advertising agency" },
  { value: "maintenance", label: "Maintenance company" },
  { value: "unknown", label: "Unknown" },
] as const;

export const ROLE_GROUP_OPTIONS = [
  { value: "data_ml_analytics", label: "Data / ML / Analytics" },
  { value: "design_ux", label: "Design / UX" },
  { value: "devops_infrastructure", label: "DevOps / Infrastructure" },
  { value: "junior_developer", label: "Junior Developer" },
  { value: "lead_developer", label: "Lead Developer" },
  { value: "management_leadership", label: "Management / Leadership" },
  { value: "other", label: "Other" },
  { value: "product_project", label: "Product / Project" },
  { value: "senior_developer", label: "Senior Developer" },
  {
    value: "software_developer_engineer",
    label: "Software Developer / Engineer",
  },
] as const;

export const EDUCATION_LEVEL_OPTIONS = [
  { value: "bachelor", label: "Bachelor's degree" },
  { value: "master", label: "Master's degree" },
  { value: "phd", label: "PhD" },
  { value: "vocational", label: "Vocational degree" },
  { value: "secondary_or_less", label: "Secondary school or less" },
  { value: "other", label: "Other" },
  { value: "unknown", label: "Prefer not to say" },
] as const;

export const LOCATION_OPTIONS = [
  { value: "capital_region", label: "Capital region (Helsinki area)" },
  { value: "rest_of_finland", label: "Rest of Finland" },
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
  age: "31_35",
  gender: "unknown",
  companyType: "product_company",
  roleGroup: "software_developer_engineer",
  educationLevel: "bachelor",
  locationCategory: "capital_region",
};
