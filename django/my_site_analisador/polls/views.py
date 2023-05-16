from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

#Tentativa de acessar o site
def index(request):
    return HttpResponse("Olá, este é o primeiro passo do site de análises!!!")