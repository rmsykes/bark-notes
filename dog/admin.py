from django.contrib import admin

from .models import Owner
from .models import Action
from .models import Dog


admin.site.register(Owner)
admin.site.register(Action)
admin.site.register(Dog)
