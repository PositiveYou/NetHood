from django.shortcuts import render
from django.http import HttpResponse

from .models import Event, User


def get_user(request):
    print(request)
    return HttpResponse({"name": "dor", "email": request})


def get_events(request):
    print(request)
    return HttpResponse(Event.objects.all())
