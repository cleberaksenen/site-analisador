from django.db import models

# Criação da classe perguntas:
class Question(models.Model):
    # Variável que vai receber o texto da pergunta
    question_text = models.CharField(max_length=200)
    # Data de publicação
    publi_date = models.DateTimeField("date_published")

# Criação da classe alternativas:
class Choices(models.Model):
    #Toda alternativa deve estar vinculada à uma pergunta (relação)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    #Campo para escrever as alternativas possíveis
    choice_text = models.CharField(max_length=100)
    #Campo para votação (números inteiros), sempre começa do 0
    votes = models.IntegerField(default=0)