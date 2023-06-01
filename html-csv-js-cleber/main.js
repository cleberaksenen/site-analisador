// Etapa para salvar as informações do arquivo.csv
document.getElementById('file-input').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
  const file = event.target.files[0]; // Obtém o arquivo selecionado
  const reader = new FileReader();   // Cria um objeto FileReader para ler o arquivo

  reader.onload = function(e) {      // Define o evento de carregamento do arquivo
    const contents = e.target.result;
    const lines = contents.split('\n');
    const table = document.getElementById('data-table');
    const columnData = []; // Array para armazenar os dados de cada coluna

    table.innerHTML = '';

    for (let i = 0; i < lines.length; i++) {
      const row = document.createElement('tr');
      const cells = lines[i].split(';');

      for (let j = 0; j < cells.length; j++) {
        const cell = document.createElement(i === 0 ? 'th' : 'td');
        cell.textContent = cells[j];
        row.appendChild(cell);

        if (i > 0) {
          if (!columnData[j]) {
            columnData[j] = []; // Cria uma nova lista para cada coluna
          }
          columnData[j].push(cells[j]); // Armazena o valor na lista da coluna correspondente
        }
      }     
      table.appendChild(row);
    }
    displayColumnData(columnData); // Exibe as listas de cada coluna na tela
  };  
  reader.readAsText(file);
}


// ####################################################################
// Função para gerar as listas
function displayColumnData(data) {
  const columnContainer = document.createElement('div');
  columnContainer.id = 'column-container';

  for (let i = 0; i < data.length; i++) {
    // Definição do nome da lista como "Coluna X": 
    const columnTitle = document.createElement('h3'); 
    columnTitle.textContent = `Coluna ${i + 1}`;

    // Definição do conteúdo da lista:
    const columnList = document.createElement('ul');
    columnList.classList.add('column-list');
    for (let j = 0; j < data[i].length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = data[i][j];
      columnList.appendChild(listItem);  // <- Adição dos elementos para columnList
    }
    columnContainer.appendChild(columnTitle); // <- Adição do columnTitle e columnList ao container
    columnContainer.appendChild(columnList);
  }

  // Adição do container após data-table
  const table = document.getElementById('data-table');
  table.insertAdjacentElement('afterend', columnContainer); 
}

document.getElementById('file-input').addEventListener('change', handleFileSelect, false);

  // Salvando o columnContainer em uma variável para uso futuro
  const container = columnContainer;
  algumaFuncao(container);


// ####################################################################
// Função para média, mediana e desvio padrão












// ####################################################################
// Função para gerar o boxplot
// function generateBoxplot() {
//   const dataTable = document.getElementById('data-table');
//   const columnData = [];

//   // Obtendo os dados da segunda coluna da tabela, ignorando a primeira linha
//   for (let i = 1; i < dataTable.rows.length; i++) {
//     const cell = dataTable.rows[i].cells[1];
//     const cellValue = parseFloat(cell.textContent);
//     if (!isNaN(cellValue)) {
//       columnData.push(cellValue);
//     }
//   }

//   // Verificando se há dados suficientes para gerar o boxplot
//   if (columnData.length >= 4) {
//     // Lógica para gerar o boxplot com os dados da coluna
//     // Aqui você pode incluir a lógica específica para gerar o gráfico do tipo "boxplot"

//     // Exemplo usando a biblioteca "chartjs-chart-box-and-violin-plot" para gerar o boxplot
//     const ctx = document.getElementById('boxplot-chart');
//     if (ctx) {
//       ctx.remove(); // Remover o elemento canvas anterior, se existir
//     }

//     const canvas = document.createElement('canvas');
//     canvas.id = 'boxplot-chart';
//     document.body.appendChild(canvas);

//     new Chart(canvas, {
//       type: 'boxplot',
//       data: {
//         labels: ['Coluna'],
//         datasets: [
//           {
//             label: 'Boxplot',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//             outlierColor: '#999999',
//             padding: 10,
//             data: [columnData],
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           boxAndViolinPlot: {
//             // Configurações adicionais do boxplot
//             // ...
//           },
//         },
//       },
//     });
//   } else {
//     alert('Não há dados suficientes para gerar o boxplot. Pelo menos 4 valores numéricos são necessários.');
//   }
// }

