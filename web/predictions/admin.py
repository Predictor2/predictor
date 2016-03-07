from django.contrib import admin
from .models import Prediction, Response


class ResponseInline(admin.StackedInline):
    model = Response
    extra = 3


class PredictionAdmin(admin.ModelAdmin):
    list_display = ('question', 'created', 'modified')

    inlines = [ResponseInline]

admin.site.register(Prediction, PredictionAdmin)
