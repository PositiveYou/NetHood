from django.shortcuts import render


def index(request):
    return render(request, 'frontend/build/index.html')
