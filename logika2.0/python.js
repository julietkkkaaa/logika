const apiKey = 'AIzaSyDBCvQOQpCwkAzJKMXZ4kFCi025jh7gcCw';
const spreadsheetId = '1niaYMjngBcN0HuZd-wlS3ZQvruSrlPWgMSBI0h7RCzc';
const range = 'Sheet1!G12:G42'; // Диапазон данных

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
      document.getElementById('a1').textContent = data.values[13]; 
      document.getElementById('a2').textContent = data.values[14]; 
      document.getElementById('a3').textContent = data.values[15]; 
      document.getElementById('a4').textContent = data.values[16]; 
      document.getElementById('a5').textContent = data.values[17];
      document.getElementById('a6').textContent = data.values[18];
      document.getElementById('a7').textContent = data.values[19];
      document.getElementById('a8').textContent = data.values[20];
      document.getElementById('a9').textContent = data.values[21];  
      document.getElementById('b1').textContent = data.values[25]; 
      document.getElementById('b2').textContent = data.values[26]; 
      document.getElementById('b3').textContent = data.values[27]; 
      document.getElementById('b4').textContent = data.values[28]; 
      document.getElementById('b5').textContent = data.values[29];
      document.getElementById('b6').textContent = data.values[30];
    } else {
      console.error('Нет данных в диапазоне');
    }
  })
  .catch(error => console.error('Ошибка:', error));
