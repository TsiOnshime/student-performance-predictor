import joblib
import numpy as np
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Load pipeline
model = joblib.load("api/student_knn_pipeline.pkl")

@api_view(['POST'])
def predict(request):
    features = request.data['features']
    features = np.array(features).reshape(1, -1)
    prediction = model.predict(features)
    return Response({"prediction": int(prediction[0])})
