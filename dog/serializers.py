from rest_framework import serializers
from .models import Owner, Action, Dog


class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Action 
        fields = ('id', 'walk', 'eat', 'poop', 'pee', 'medicine', 'dog')


class DogSerializer(serializers.ModelSerializer):
    actions = ActionSerializer(many=True, read_only=True)
    class Meta:
        model = Dog
        fields = ('id', 'name', 'age', 'breed', 'photo_url', 'owner', 'actions')

class OwnerSerializer(serializers.ModelSerializer):
    dogs = DogSerializer(many=True, read_only=True)
    class Meta:
        model = Owner
        fields = ('id', 'name', 'photo_url', 'dogs')



