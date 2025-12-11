import { useState } from "react";
import {
  SalaryFormData,
  DEFAULT_FORM_DATA,
  AGE_OPTIONS,
  GENDER_OPTIONS,
  COMPANY_TYPE_OPTIONS,
  ROLE_GROUP_OPTIONS,
  EDUCATION_LEVEL_OPTIONS,
  LOCATION_OPTIONS,
  SOURCE_LANGUAGE_OPTIONS,
} from "./types";
import { predictSalary, loadModel } from "./model";
import "./SalaryPredictor.css";

export function SalaryPredictor() {
  const [formData, setFormData] = useState<SalaryFormData>(DEFAULT_FORM_DATA);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  // Load model on mount
  useState(() => {
    loadModel()
      .then(() => setModelLoaded(true))
      .catch((err) => setError(`Failed to load model: ${err.message}`));
  });

  const handleChange = (
    field: keyof SalaryFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await predictSalary(formData);
      setPrediction(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="salary-predictor">
      <header className="header">
        <h1>🇫🇮 Finnish Tech Salary Predictor</h1>
        <p>
          Estimate your monthly salary based on the 2024 Koodiklinikka Salary
          Survey data
        </p>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-section">
          <h2>Experience & Work Style</h2>

          <div className="form-group">
            <label htmlFor="experienceYears">Years of Experience</label>
            <input
              type="number"
              id="experienceYears"
              min="0"
              max="50"
              value={formData.experienceYears}
              onChange={(e) =>
                handleChange("experienceYears", parseInt(e.target.value) || 0)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="officeTimePercent">Office Time (%)</label>
            <input
              type="range"
              id="officeTimePercent"
              min="0"
              max="100"
              value={formData.officeTimePercent}
              onChange={(e) =>
                handleChange("officeTimePercent", parseInt(e.target.value))
              }
            />
            <span className="range-value">{formData.officeTimePercent}%</span>
          </div>

          <div className="form-group">
            <label htmlFor="sourceLanguage">Survey Language</label>
            <select
              id="sourceLanguage"
              value={formData.sourceLanguage}
              onChange={(e) => handleChange("sourceLanguage", e.target.value)}
            >
              {SOURCE_LANGUAGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Personal Information</h2>

          <div className="form-group">
            <label htmlFor="age">Age Group</label>
            <select
              id="age"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
            >
              {AGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              {GENDER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="educationLevel">Education Level</label>
            <select
              id="educationLevel"
              value={formData.educationLevel}
              onChange={(e) => handleChange("educationLevel", e.target.value)}
            >
              {EDUCATION_LEVEL_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Work Details</h2>

          <div className="form-group">
            <label htmlFor="roleGroup">Role</label>
            <select
              id="roleGroup"
              value={formData.roleGroup}
              onChange={(e) => handleChange("roleGroup", e.target.value)}
            >
              {ROLE_GROUP_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="companyType">Company Type</label>
            <select
              id="companyType"
              value={formData.companyType}
              onChange={(e) => handleChange("companyType", e.target.value)}
            >
              {COMPANY_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="locationCategory">Location</label>
            <select
              id="locationCategory"
              value={formData.locationCategory}
              onChange={(e) => handleChange("locationCategory", e.target.value)}
            >
              {LOCATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={loading || !modelLoaded}
        >
          {loading
            ? "Predicting..."
            : modelLoaded
            ? "Predict Salary"
            : "Loading model..."}
        </button>
      </form>

      {error && (
        <div className="error">
          <p>❌ {error}</p>
        </div>
      )}

      {prediction !== null && (
        <div className="result">
          <h2>Predicted Monthly Salary</h2>
          <p className="salary">€{prediction.toLocaleString("fi-FI")}</p>
          <p className="disclaimer">
            This prediction is based on the 2024 Koodiklinikka Salary Survey
            data. Actual salaries may vary significantly based on many factors
            not captured in this model.
          </p>
        </div>
      )}

      <footer className="footer">
        <p>
          Data source:{" "}
          <a
            href="https://koodiklinikka.github.io/palkkakysely/2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            Koodiklinikka Salary Survey 2024
          </a>
        </p>
        <p>Model R² score: 0.31 (explains ~31% of salary variance)</p>
      </footer>
    </div>
  );
}
