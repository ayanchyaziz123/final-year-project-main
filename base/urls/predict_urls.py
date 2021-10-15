from django.urls import path
from base.views import predict_views as views

urlpatterns = [
    path('', views.getPredict, name="predict"),
    path('car_name/', views.getCarName, name="car_name"),
]
