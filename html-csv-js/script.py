import pandas as pd
import matplotlib.pyplot as plt

# Carrega o arquivo CSV
data = pd.read_csv('dados.csv', sep=';')

# Extrai as colunas de interesse
x_data = data.iloc[:, 2]  # Terceira coluna
y_data = data.iloc[:, 1]  # Segunda coluna

# Cria o boxplot
plt.boxplot(y_data, labels=[x_data.name])

# Configurações adicionais do gráfico
plt.xlabel(x_data.name)
plt.ylabel(y_data.name)
plt.title('Boxplot')

# Exibe o gráfico
plt.show()


