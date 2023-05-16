from django.urls import path
from . import views  

#Padrões de URLs: 
urlpatterns = [
    path('',views.index, name='index')
]