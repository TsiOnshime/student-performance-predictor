# KNN Student Performance Predictor

A web application that predicts whether a student will pass or fail based on study time, absences, and previous grades using a K-Nearest Neighbors (KNN) model. The backend is built with Django, and the frontend uses React (Vite). A Jupyter notebook was used to preprocess data and train the KNN pipeline.

---

## Folder Structure

```
knn_student_performance/
│
├─ knn_backend/          # Django backend
│   ├─ api/              # API app
│   │   └─ student_knn_pipeline.pkl
│   └─ knn_backend/      # Django settings
│
├─ knn-frontend-vite/    # React/Vite frontend
│
└─ StudentPerformanceNotebook.ipynb
```

---

## Features

- Predict student Pass/Fail based on:
  - Study time
  - Absences
  - G1 and G2 grades
- Simple and responsive React frontend
- Django REST API backend
- Preprocessing included in the notebook (bonus)

---

## Installation

### Backend (Django)

1. Create and activate a virtual environment:
   ```bash
   python3 -m venv knn_env
   source knn_env/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r knn_backend/requirements.txt
   ```
3. Run migrations:
   ```bash
   cd knn_backend
   python3 manage.py makemigrations
   python3 manage.py migrate
   ```
4. Start backend server:
   ```bash
   python3 manage.py runserver
   ```

### Frontend (React/Vite)

1. Navigate to frontend folder:
   ```bash
   cd knn-frontend-vite
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start frontend server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the frontend in the browser (usually http://localhost:5173/)  
2. Enter student details:
   - Studytime (1-4)
   - Absences
   - G1 grade (0-20)
   - G2 grade (0-20)
3. Click "Predict"  
4. See the result: Pass or Fail

---

## Dataset & Model

- Dataset: Student Performance dataset from UCI (student-mat.csv)  
- Preprocessing:
  - Handled null values
  - Scaled features as needed
- Model: K-Nearest Neighbors (KNN) pipeline saved as `student_knn_pipeline.pkl`

---

## Requirements

- Python 3.10+  
- Django 6.x  
- React + Vite  
- Node.js 18+  
- npm 9+  

CORS is enabled for frontend-backend communication during development.

---


---

## Author

Tsion Shimelis 
Date: December 2025
