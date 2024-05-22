from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField(default="18:00")  # New field for time
    location = models.CharField(max_length=200, default="Unknown Location")  # New field for location
    image = models.ImageField(upload_to='event_images/', default='default_img.jpg')  # New field for image

    def __str__(self):
        return self.name
