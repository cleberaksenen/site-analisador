import pandas as pd
import matplotlib.pyplot as plt
import io

def generate_line_chart(df):
    plt.plot(df['x'], df['y'])
    plt.xlabel('X')
    plt.ylabel('Y')
    
    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png')
    img_buffer.seek(0)
    
    plt.clf()
    
    return img_buffer

def generate_bar_chart(df):
    plt.bar(df['z'], df['y'])
    plt.xlabel('X')
    plt.ylabel('Y')
    
    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png')
    img_buffer.seek(0)
    
    plt.clf()
    
    return img_buffer
