from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer

class EventListCreate(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


def delete_record_view(request, pk):
    try:
        record = Event.objects.get(pk=pk)
        record.delete()
        return JsonResponse({'message': 'Record deleted successfully'})
    except Event.DoesNotExist:
        return JsonResponse({'error': 'Record does not exist'}, status=404)
