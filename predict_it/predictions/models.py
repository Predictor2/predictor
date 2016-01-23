from __future__ import unicode_literals

from django.db import models
from model_utils.models import TimeStampedModel


class Prediction(TimeStampedModel):
    question = models.CharField(max_length=200)
