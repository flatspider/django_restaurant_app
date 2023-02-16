from django.shortcuts import render

# Create your views here.

from rest_framework import generics

from .models import Food

from .serializers import FoodSerializer

# Default is setup to allow for GET requests.
# We need to add additional information.

# Modified the class to use the generics.ListCREATEapiView


class FoodListAPIView(generics.ListCreateAPIView):
    # Go to the Book table and get all of the objects.
    queryset = Food.objects.all()
    # The rest framework needs a serializer.
    serializer_class = FoodSerializer


# May need to change the serializer? I want to have full access to the database, but only display:
# Foods where category==dessert
# I want those views triggered by the button click. Is that when I should fetch items with category==lunch
class DessertListAPIView(generics.ListCreateAPIView):
    # Go to the Book table and get all of the objects.
    queryset = Food.objects.all()
    # The rest framework needs a serializer.
    serializer_class = FoodSerializer


class LunchListAPIView(generics.ListCreateAPIView):
    # Go to the Book table and get all of the objects.
    queryset = Food.objects.all()
    # The rest framework needs a serializer.
    serializer_class = FoodSerializer
