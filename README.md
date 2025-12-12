# Finnish Tech Salary Survey 2024

A browser-based salary prediction tool for Finnish tech professionals, powered by machine learning. Built using data from the [Koodiklinikka Salary Survey 2024](https://koodiklinikka.github.io/palkkakysely/2024).

## 🚀 Live Demo

**[Try the Salary Predictor →](https://elarsaks.github.io/finnish-tech-salary-survey/)**

![Finnish Tech Salary Predictor Screenshot](./client/public/some.png)

## ✨ Features

- **Browser-based ML inference** - No server required, predictions run entirely in your browser
- **ONNX Runtime Web** - Fast inference using WebAssembly
- **Privacy-first** - Your data never leaves your device
- **Responsive design** - Works on desktop and mobile

## 🛠️ Tech Stack

### Client Application
- **React** + **TypeScript** - UI framework
- **Vite** - Build tool
- **styled-components** - CSS-in-JS styling
- **ONNX Runtime Web** - Browser-based ML inference

### Machine Learning
- **Random Forest Regressor** - Model architecture
- **scikit-learn** - Model training
- **skl2onnx** - ONNX conversion
- **Model Performance**: R² = 0.44, MAE = €834

### Data Processing
- **Python** - Data cleaning and analysis
- **pandas** - Data manipulation
- **Jupyter Notebooks** - Interactive analysis

## 📊 Notebooks

| Notebook | Description | Kaggle |
|----------|-------------|--------|
| Data Download | Downloads raw survey data in Finnish and English | [View](https://www.kaggle.com/code/elarsaks/finnish-tech-salary-survey-2024-data-download) |
| Data Cleaning | Cleans and processes the raw data | [View](https://www.kaggle.com/code/elarsaks/finnish-tech-salary-survey-2024-data-cleaning) |
| Data Analytics | Exploratory analysis and model training | [View](https://www.kaggle.com/code/elarsaks/finnish-tech-salary-survey-2024-data-analytics) |

## 📁 Project Structure

```
├── client/                     # React application
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── lib/                # ML model utilities
│   │   └── styles/             # Global styles
│   └── public/
│       ├── salary_predictor_v1.0.0.onnx    # ML model
│       └── salary_predictor_v1.0.0_metadata.json
├── data/                       # Data processing
│   ├── raw/                    # Raw downloaded data
│   ├── processed/              # Cleaned data
│   ├── models/                 # Trained models
│   └── *.ipynb                 # Jupyter notebooks
└── .github/workflows/          # CI/CD deployment
```

## 🚀 Local Development

### Client Application

```bash
cd client
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Data Processing

```bash
cd data
uv sync          # Install dependencies
```

Run the notebooks in order:
1. `finnish-tech-salary-survey-2024-data-download.ipynb`
2. `finnish-tech-salary-survey-2024-data-cleaning.ipynb`
3. `finnish-tech-salary-survey-2024-data-analytics.ipynb`

## 📈 Model Details

The salary predictor uses a Random Forest model trained on 532 survey responses. Features include:

- Experience level
- Role
- Location
- Education level
- Company size
- Employment type
- Age group

## ⚠️ Disclaimer

This is an experimental prediction tool based on self-reported survey data from 532 respondents. The model explains approximately 44% of salary variance (R² = 0.44). Actual salaries can vary significantly based on factors not captured in this survey. Use predictions as rough estimates only, not for salary negotiations or financial decisions.

## 📄 Data Source

Survey data from [Koodiklinikka Salary Survey 2024](https://koodiklinikka.github.io/palkkakysely/2024) - a Finnish developer community survey collecting salary information from tech professionals working in Finland.

## 📜 License

MIT
