from django.urls import path

from .views import FoodListAPIView, DessertListAPIView, LunchListAPIView

urlpatterns = [
    path('', FoodListAPIView.as_view()),
    path('desserts/', DessertListAPIView.as_view()),
    path('lunch/', LunchListAPIView.as_view()),
]
