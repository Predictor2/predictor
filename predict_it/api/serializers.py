from rest_framework import serializers

from predict_it.predictions.models import Prediction


class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ('id', 'question')
