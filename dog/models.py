from django.db import models


class Owner(models.Model):
    name = models.CharField(max_length=101)
    photo_url = models.TextField(default='n/a')

    def __str__(self):
        return self.name



class Dog(models.Model):
    name = models.CharField(max_length=101)
    age = models.IntegerField(default=0)
    breed = models.CharField(max_length=101, default='n/a')
    photo_url = models.TextField(default='n/a')
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name='dogs')


    def __str__(self):
        return self.name


class Action(models.Model):
    walk = models.CharField(max_length=100, default='n/a')
    eat = models.CharField(max_length=100, default='n/a')
    poop = models.CharField(max_length=101, default='n/a')
    pee = models.CharField(max_length=100, default='n/a')
    medicine = models.CharField(max_length=100, default='n/a')
    dog = models.ForeignKey(Dog, on_delete=models.CASCADE, related_name='actions', default='n/a')