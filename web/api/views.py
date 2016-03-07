from rest_framework import generics, permissions

from predictions.models import Prediction

from .serializers import PredictionSerializer


class PredictionList(generics.ListAPIView):
    queryset = Prediction.objects.all()
    serializer_class = PredictionSerializer
    permission_classes = [
        permissions.AllowAny
    ]
