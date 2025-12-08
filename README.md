# Finnish Tech Salary Survey

Analysis of the Finnish tech industry salary survey data from [Koodiklinikka](https://koodiklinikka.fi/), a Finnish developer community.

## Data Source

The survey data is from the [2024 Koodiklinikka Salary Survey](https://koodiklinikka.github.io/palkkakysely/2024), which collects salary information from tech professionals working in Finland.

## Project Structure

```
├── data/
│   ├── raw/                    # Raw downloaded data (git-ignored)
│   ├── processed/              # Cleaned data (git-ignored)
│   ├── finnish-tech-salary-survey-2024-data-download.ipynb
│   └── finnish-tech-salary-survey-2024-data-cleaning.ipynb
└── README.md
```

## Notebooks

| Notebook | Description | Kaggle |
|----------|-------------|--------|
| Data Download | Downloads raw survey data in Finnish and English | [View](https://www.kaggle.com/code/elarsaks/finnish-tech-salary-survey-2024-data-download) |
| Data Cleaning | Cleans and processes the raw data | [View](https://www.kaggle.com/code/elarsaks/finnish-tech-salary-survey-2024-data-cleaning) |

## Local Setup

```bash
cd data
uv sync          # Install dependencies
```

The notebooks automatically detect the environment and use appropriate paths for both local development and Kaggle.

## License

Data source: Koodiklinikka Salary Survey 2024
