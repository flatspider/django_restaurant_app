from django.urls import path, include


urlpatterns = [
    path('foods/', include('foods.urls')),
]
