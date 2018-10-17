from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    age = models.PositiveSmallIntegerField(range(5, 100))


class Event(models.Model):
    event_name = models.CharField(max_length=200)
    creator_id = models.ForeignKey(User, on_delete=models.CASCADE)
    event_time = models.DateField(auto_now=True)
