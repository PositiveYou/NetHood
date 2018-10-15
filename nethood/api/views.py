from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from .models import Event, User


def get_user(request):
    print(request)
    return JsonResponse({"name": "dor", "email": request.user.username})


def get_events(request):
    print(request)
    return HttpResponse(Event.objects.order_by('-pub_date')[:5])
