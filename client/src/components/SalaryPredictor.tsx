import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AGE_OPTIONS,
  COMPANY_TYPE_OPTIONS,
  DEFAULT_FORM_DATA,
  EDUCATION_LEVEL_OPTIONS,
  GENDER_OPTIONS,
  LOCATION_OPTIONS,
  ROLE_GROUP_OPTIONS,
  SOURCE_LANGUAGE_OPTIONS,
  type SalaryFormData,
} from "../lib/types";
import { loadModel, predictSalary } from "../lib/model";

// ============================================================================
// Styled Components
// ============================================================================

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, sans-serif;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #1a1a2e;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const Form = styled.form`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const FormSection = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.2rem;
    color: #1a1a2e;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #007bff;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #333;
  }

  input[type="number"],
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    background: white;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  input[type="number"]:focus,
  select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  input[type="range"] {
    width: calc(100% - 60px);
    vertical-align: middle;
  }
`;

const RangeValue = styled.span`
  display: inline-block;
  width: 50px;
  text-align: right;
  font-weight: 500;
  color: #007bff;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorBox = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 8px;
  color: #c00;
`;

const Result = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border-radius: 12px;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #2e7d32;
  }
`;

const Salary = styled.p`
  font-size: 3rem;
  font-weight: 700;
  color: #1b5e20;
  margin: 0.5rem 0;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const Disclaimer = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

// ============================================================================
// Reusable Form Components
// ============================================================================

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <FormGroup>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FormGroup>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function SalaryPredictor() {
  const [formData, setFormData] = useState<SalaryFormData>(DEFAULT_FORM_DATA);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    loadModel()
      .then(() => setModelLoaded(true))
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : String(err);
        setError(`Failed to load model: ${message}`);
      });
  }, []);

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
      setError(
        err instanceof Error ? err.message : "Prediction failed: " + String(err)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <h1>🇫🇮 Finnish Tech Salary Predictor</h1>
        <p>
          Estimate your monthly salary based on the 2024 Koodiklinikka Salary
          Survey data
        </p>
      </Header>

      <Form onSubmit={handleSubmit}>
        <FormSection>
          <h2>Experience & Work Style</h2>

          <FormGroup>
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
          </FormGroup>

          <FormGroup>
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
            <RangeValue>{formData.officeTimePercent}%</RangeValue>
          </FormGroup>

          <SelectField
            id="sourceLanguage"
            label="Survey Language"
            value={formData.sourceLanguage}
            options={SOURCE_LANGUAGE_OPTIONS}
            onChange={(v) => handleChange("sourceLanguage", v)}
          />
        </FormSection>

        <FormSection>
          <h2>Personal Information</h2>

          <SelectField
            id="age"
            label="Age Group"
            value={formData.age}
            options={AGE_OPTIONS}
            onChange={(v) => handleChange("age", v)}
          />

          <SelectField
            id="gender"
            label="Gender"
            value={formData.gender}
            options={GENDER_OPTIONS}
            onChange={(v) => handleChange("gender", v)}
          />

          <SelectField
            id="educationLevel"
            label="Education Level"
            value={formData.educationLevel}
            options={EDUCATION_LEVEL_OPTIONS}
            onChange={(v) => handleChange("educationLevel", v)}
          />
        </FormSection>

        <FormSection>
          <h2>Work Details</h2>

          <SelectField
            id="roleGroup"
            label="Role"
            value={formData.roleGroup}
            options={ROLE_GROUP_OPTIONS}
            onChange={(v) => handleChange("roleGroup", v)}
          />

          <SelectField
            id="companyType"
            label="Company Type"
            value={formData.companyType}
            options={COMPANY_TYPE_OPTIONS}
            onChange={(v) => handleChange("companyType", v)}
          />

          <SelectField
            id="locationCategory"
            label="Location"
            value={formData.locationCategory}
            options={LOCATION_OPTIONS}
            onChange={(v) => handleChange("locationCategory", v)}
          />
        </FormSection>

        <SubmitButton type="submit" disabled={loading || !modelLoaded}>
          {loading
            ? "Predicting..."
            : modelLoaded
            ? "Predict Salary"
            : "Loading model..."}
        </SubmitButton>
      </Form>

      {error && (
        <ErrorBox>
          <p>❌ {error}</p>
        </ErrorBox>
      )}

      {prediction !== null && (
        <Result>
          <h2>Predicted Monthly Salary</h2>
          <Salary>€{prediction.toLocaleString("fi-FI")}</Salary>
          <Disclaimer>
            This prediction is based on the 2024 Koodiklinikka Salary Survey
            data. Actual salaries may vary significantly based on many factors
            not captured in this model.
          </Disclaimer>
        </Result>
      )}

      <Footer>
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
      </Footer>
    </Container>
  );
}
