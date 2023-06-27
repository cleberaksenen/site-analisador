from flask import Flask, request, render_template, send_file
import pandas as pd
import matplotlib.pyplot as plt
from chart_generator import generate_line_chart, generate_bar_chart, generate_box_chart

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        chart_type = request.form['chart_type']
        x_axis = request.form['x_axis']
        y_axis = request.form['y_axis']
        x_planilha = request.form['x_planilha']
        y_planilha = request.form['y_planilha']

        df = pd.read_excel(file)
        
        if chart_type == 'line':
            chart_buffer = generate_line_chart(df, eixo_x = x_axis, eixo_y = y_axis, x_planilha=x_planilha, y_planilha=y_planilha)
        elif chart_type == 'bar':
            chart_buffer = generate_bar_chart(df, eixo_x = x_axis, eixo_y = y_axis, x_planilha=x_planilha, y_planilha=y_planilha)
        elif chart_type == 'box':
            chart_buffer = generate_box_chart(df, eixo_x = x_axis, eixo_y = y_axis, x_planilha=x_planilha, y_planilha=y_planilha)
        else:
            return 'Tipo de gráfico inválido.'
        
        return send_file(chart_buffer, mimetype='image/png')
    
    return render_template('upload.html')


if __name__ == '__main__':
    app.run(debug=True)
