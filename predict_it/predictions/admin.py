from django.contrib import admin
from predict_it.predictions.models import Prediction, Response


class ResponseInline(admin.StackedInline):
    model = Response
    extra = 3


class PredictionAdmin(admin.ModelAdmin):
    list_display = ('question', 'created', 'modified')

    inlines = [ResponseInline]

admin.site.register(Prediction, PredictionAdmin)
