import { useState } from 'react';

function App() {
  // Локальное состояние счетчика
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px', textAlign: 'center' }}>
      <h1>Привет, реакт-разработчик! 🚀</h1>
      <p>Если ты видишь эту страницу, значит проект успешно настроен и работает.</p>
      
      <div style={{ 
        margin: '20px auto', 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        maxWidth: '350px',
        backgroundColor: '#f9f9f9'
      }}>
        <h3>Проверка состояния (state)</h3>
        <p>Количество кликов: <strong>{count}</strong></p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ 
            padding: '8px 16px', 
            fontSize: '16px', 
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Нажми меня!
        </button>
      </div>
    </div>
  );
}

export default App;
