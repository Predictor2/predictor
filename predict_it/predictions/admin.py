from django.contrib import admin
from predict_it.predictions.models import Prediction


class PredictionAdmin(admin.ModelAdmin):
    list_display = ('question', 'created', 'modified')

admin.site.register(Prediction, PredictionAdmin)
