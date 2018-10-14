from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.get_user),
    path('events/', views.get_events),
]
