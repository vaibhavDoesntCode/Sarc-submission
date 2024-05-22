from django.urls import path
from .views import EventListCreate
from .views import delete_record_view

urlpatterns = [
    path('events/', EventListCreate.as_view(), name='event-list'),
    path('delete/<int:pk>/', delete_record_view, name='delete-record')
]
