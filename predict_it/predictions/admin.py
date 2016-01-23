from django.contrib import admin
from predict_it.predictions.models import Prediction


class PredictionAdmin(admin.ModelAdmin):
    pass

admin.site.register(Prediction, PredictionAdmin)
