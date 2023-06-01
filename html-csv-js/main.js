// Etapa para salvar as informações do arquivo.csv
document.getElementById('file-input').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const contents = e.target.result;
    const lines = contents.split('\n');
    const table = document.getElementById('data-table');

    table.innerHTML = '';

    for (let i = 0; i < lines.length; i++) {
      const row = document.createElement('tr');
      const cells = lines[i].split(';');

      for (let j = 0; j < cells.length; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td');
        cell.textContent = cells[j];
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
  };
  reader.readAsText(file);
}


// Função para gerar o boxplot
function generateBoxplot() {
  const dataTable = document.getElementById('data-table');
  const columnData = [];

  // Obtendo os dados da segunda coluna da tabela, ignorando a primeira linha
  for (let i = 1; i < dataTable.rows.length; i++) {
    const cell = dataTable.rows[i].cells[1];
    const cellValue = parseFloat(cell.textContent);
    if (!isNaN(cellValue)) {
      columnData.push(cellValue);
    }
  }

  // Verificando se há dados suficientes para gerar o boxplot
  if (columnData.length >= 4) {
    // Lógica para gerar o boxplot com os dados da coluna
    // Aqui você pode incluir a lógica específica para gerar o gráfico do tipo "boxplot"

    // Exemplo usando a biblioteca "chartjs-chart-box-and-violin-plot" para gerar o boxplot
    const ctx = document.getElementById('boxplot-chart');
    if (ctx) {
      ctx.remove(); // Remover o elemento canvas anterior, se existir
    }

    const canvas = document.createElement('canvas');
    canvas.id = 'boxplot-chart';
    document.body.appendChild(canvas);

    new Chart(canvas, {
      type: 'boxplot',
      data: {
        labels: ['Coluna'],
        datasets: [
          {
            label: 'Boxplot',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            outlierColor: '#999999',
            padding: 10,
            data: [columnData],
          },
        ],
      },
      options: {
        plugins: {
          boxAndViolinPlot: {
            // Configurações adicionais do boxplot
            // ...
          },
        },
      },
    });
  } else {
    alert('Não há dados suficientes para gerar o boxplot. Pelo menos 4 valores numéricos são necessários.');
  }
}
