import pandas as pd
import matplotlib.pyplot as plt
import io

def generate_line_chart(df, eixo_x = "X", eixo_y = "Y", x_planilha = "x", y_planilha = "y"):
    plt.plot(df[x_planilha], df[y_planilha])
    plt.xlabel(eixo_x)
    plt.ylabel(eixo_y)
    
    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png')
    img_buffer.seek(0)
    
    plt.clf()
    
    return img_buffer

def generate_bar_chart(df, eixo_x = "X", eixo_y = "Y", x_planilha = "x", y_planilha = "y"):
    plt.bar(df[x_planilha], df[y_planilha])
    plt.xlabel(eixo_x)
    plt.ylabel(eixo_y)
    
    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png')
    img_buffer.seek(0)
    
    plt.clf()
    
    return img_buffer
