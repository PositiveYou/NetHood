from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=200)


class Event(models.Model):
    name = models.CharField(max_length=200)
