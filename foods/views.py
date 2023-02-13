from django.shortcuts import render

# Create your views here.

from rest_framework import generics

from .models import Food

from .serializers import FoodSerializer

# Default is setup to allow for GET requests.
# We need to add additional information.


class FoodListAPIView(generics.ListAPIView):
    # Go to the Book table and get all of the objects.
    queryset = Food.objects.all()
    # The rest framework needs a serializer.
    serializer_class = FoodSerializer
