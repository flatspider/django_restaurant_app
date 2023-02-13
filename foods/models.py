from django.db import models

# Create your models here.


class Food(models.Model):
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.CharField(max_length=255)

    def __str__(self):
        return self.description
