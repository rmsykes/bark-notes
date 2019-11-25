from rest_framework import serializers
from .models import Owner, Action, Dog

class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action 
        fields = ('id', 'walk', 'eat', 'poop', 'pee', 'medicine')

class DogSerializer(serializers.ModelSerializer):
    actions = ActionSerializer(many=True, read_only=True)
    class Meta:
        model = Dog
        fields = ('id', 'name', 'age', 'breed', 'photo_url'. 'actions')


class OwnerSerializer(serializers.ModelSerializer):
    dog = DogSerializer(many=True, read_only=True)
    class Meta:
        model = Owner
        fields = ('id', 'name', 'photo_url', 'dog')
