from __future__ import unicode_literals

from django.db import models
from model_utils.models import TimeStampedModel


class Prediction(TimeStampedModel):
    question = models.CharField(max_length=200)


class Response(TimeStampedModel):
    response = models.CharField(max_length=500)
    prediction = models.ForeignKey(Prediction, related_name='responses')

    def __str__(self):
        return "{}".format(self.response)
