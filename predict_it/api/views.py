from rest_framework import generics, permissions

from predict_it.predictions.models import Prediction
from .serializers import PredictionSerializer


class PredictionList(generics.ListAPIView):
    model = Prediction
    serializer_class = PredictionSerializer
    permission_classes = [
        permissions.AllowAny
    ]
