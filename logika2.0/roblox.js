const apiKey = 'AIzaSyDBCvQOQpCwkAzJKMXZ4kFCi025jh7gcCw';
const spreadsheetId = '1niaYMjngBcN0HuZd-wlS3ZQvruSrlPWgMSBI0h7RCzc';
const range = 'Sheet2!D4'; // Диапазон данных

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.values && data.values.length > 0) {
      // Привязываем данные к ячейкам таблицы
      document.getElementById('c1').textContent = data.values[0]; 
    } else {
      console.error('Нет данных в диапазоне');
    }
  })
  .catch(error => console.error('Ошибка:', error));
