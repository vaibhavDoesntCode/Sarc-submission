# Generated by Django 5.0.6 on 2024-05-15 08:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_alter_event_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='time',
        ),
    ]