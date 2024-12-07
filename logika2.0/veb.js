const apiKey = 'AIzaSyDBCvQOQpCwkAzJKMXZ4kFCi025jh7gcCw';
const spreadsheetId = '1niaYMjngBcN0HuZd-wlS3ZQvruSrlPWgMSBI0h7RCzc';
const range = 'Sheet1!G46:G83'; // Диапазон данных

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.values && data.values.length > 0) {
      // Привязываем данные к ячейкам таблицы
      document.getElementById('c1').textContent = data.values[0]; 
      document.getElementById('c2').textContent = data.values[1]; 
      document.getElementById('c3').textContent = data.values[2]; 
      document.getElementById('c4').textContent = data.values[3]; 
      document.getElementById('c5').textContent = data.values[4];
      document.getElementById('c6').textContent = data.values[5];
      document.getElementById('c7').textContent = data.values[6];
      document.getElementById('c8').textContent = data.values[7];
      document.getElementById('c9').textContent = data.values[8];
      document.getElementById('c10').textContent = data.values[9];   
      document.getElementById('a1').textContent = data.values[20]; 
      document.getElementById('a2').textContent = data.values[21]; 
      document.getElementById('a3').textContent = data.values[22]; 
      document.getElementById('a4').textContent = data.values[23]; 
      document.getElementById('a5').textContent = data.values[24];
      document.getElementById('a6').textContent = data.values[25];
      document.getElementById('a7').textContent = data.values[26]; 
      document.getElementById('b1').textContent = data.values[13]; 
      document.getElementById('b2').textContent = data.values[14]; 
      document.getElementById('b3').textContent = data.values[15]; 
      document.getElementById('b4').textContent = data.values[16]; 
      document.getElementById('d1').textContent = data.values[30]; 
      document.getElementById('d2').textContent = data.values[31]; 
      document.getElementById('d3').textContent = data.values[32]; 
      document.getElementById('d4').textContent = data.values[33]; 
      document.getElementById('d5').textContent = data.values[34];
      document.getElementById('d6').textContent = data.values[35];
      document.getElementById('d7').textContent = data.values[36];
      document.getElementById('d8').textContent = data.values[37];
    } else {
      console.error('Нет данных в диапазоне');
    }
  })
  .catch(error => console.error('Ошибка:', error));