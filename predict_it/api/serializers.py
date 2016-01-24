from rest_framework import serializers

from predict_it.predictions.models import Prediction, Response

class ResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Response
        fields = ('id', 'response')


class PredictionSerializer(serializers.ModelSerializer):
    responses = serializers.StringRelatedField(many=True)

    class Meta:
        model = Prediction
        fields = ('id', 'question', 'responses')
