# Finnish Tech Salary Predictor

A React app that predicts monthly salaries for tech professionals in Finland using a machine learning model trained on the 2024 Koodiklinikka Salary Survey data.

## Features

- **In-browser inference**: The ONNX model runs directly in your browser using WebAssembly - no backend required
- **Multiple factors**: Predict salary based on experience, role, company type, education, location, and more
- **Privacy-first**: All predictions happen locally in your browser; no data is sent to any server

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## How It Works

1. The app loads an ONNX model (`salary_predictor_v1.0.0.onnx`) trained on Finnish tech salary data
2. User inputs are encoded into a 45-feature vector matching the model's expected format
3. ONNX Runtime Web runs inference in the browser using WebAssembly
4. The predicted monthly salary (EUR) is displayed

## Model Details

- **Algorithm**: Ridge Regression
- **Features**: 45 (including experience, age, gender, company type, role, education, location)
- **R² Score**: ~0.31 (explains ~31% of salary variance)
- **Training Data**: 2024 Koodiklinikka Salary Survey (431 samples)

## Data Source

[Koodiklinikka Salary Survey 2024](https://koodiklinikka.github.io/palkkakysely/2024)
