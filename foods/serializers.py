from rest_framework import serializers

from .models import Food


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        # fields = '__all__' # '__all__'This returns all of the fields. Not very secure.
        # This is a TOOPLE. tuple. Not mutable.
        fields = ('id', 'description', 'category', 'price',)
        # There is also an excludes. Set excludes = and pass through the field you do NOT want display.
