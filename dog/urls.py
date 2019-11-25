from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('dog', views.DogView)
router.register('owner', views.OwnerView)
router.register('action', views.ActionView)



urlpatterns = [
    path('', include(router.urls))
]