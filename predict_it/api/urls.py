
from django.conf.urls import url, include

from .views import PredictionList

prediction_urls = [
    url(r'^$', PredictionList.as_view(), name='prediction-list')
]

urlpatterns = [
    url(r'^predictions', include(prediction_urls)),
]