from django.db import models


class Dog(model.Models):
    name = models.CharField(max_length=100)
    age = models.IntegerField(max_length = 2, default='n/a')
    breed = models.CharField(max_length=100, default='n/a')
    photo_url = models.TextField(default='n/a')

    def __str__(self):
        return self.name


class Owner(model.Models):
    name = models.CharField(max_length=100)
    photo_url = models.TextField(default='n/a')

    def __str__(self):
        return self.name


class Dog_Actions(model.Models):
    walk = models.CharField(max_length=100, default='n/a')
    eat = models.CharField(max_length=100, default='n/a')
    poop = models.CharField(max_length=100, default='n/a')
    pee = models.CharField(max_length=100, default='n/a')
    medicine = models.CharField(max_length=100, default='n/a')