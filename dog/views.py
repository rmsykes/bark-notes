from rest_framework import viewsets

from .serializers import DogSerializer, OwnerSerializer, ActionSerializer
from .models import Dog, Owner, Action


class DogView(viewsets.ModelViewSet):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer 

class OwnerView(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer 

class ActionView(viewsets.ModelViewSet):
    queryset = Action.objects.all()
    serializer_class = ActionSerializer 