from django.db import models


class Owner(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.TextField(default='n/a')

    def __str__(self):
        return self.name


class Action(models.Model):
    walk = models.CharField(max_length=100, default='n/a')
    eat = models.CharField(max_length=100, default='n/a')
    poop = models.CharField(max_length=100, default='n/a')
    pee = models.CharField(max_length=100, default='n/a')
    medicine = models.CharField(max_length=100, default='n/a')


class Dog(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(default='n/a')
    breed = models.CharField(max_length=100, default='n/a')
    photo_url = models.TextField(default='n/a')
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name='dog')
    action = models.ForeignKey(Action, on_delete=models.CASCADE, related_name='dog')


    def __str__(self):
        return self.name