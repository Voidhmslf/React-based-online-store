import { useState } from 'react';
import { mockProducts } from '../services/mockProducts';

function Home() {
  // Состояния для поиска и фильтрации по категориям
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  // Получаем уникальный список категорий из товаров
  const categories = ['Все', ...new Set(mockProducts.map(product => product.category))];

  // Фильтруем товары на основе поиска и выбранной категории
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#333'
    }}>
      {/* Шапка главной страницы */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px', color: '#111' }}>
          Наш Интернет-Магазин 🛍️
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Лучшие товары по самым выгодным ценам с доставкой до двери
        </p>
      </header>

      {/* Панель фильтров и поиска */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px', 
        marginBottom: '40px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        border: '1px solid #e9ecef'
      }}>
        {/* Поле поиска */}
        <input 
          type="text" 
          placeholder="Поиск товаров..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ 
            padding: '12px 16px', 
            fontSize: '16px', 
            borderRadius: '8px', 
            border: '1px solid #ced4da',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
        />

        {/* Кнопки категорий */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: selectedCategory === category ? '#0070f3' : '#e9ecef',
                color: selectedCategory === category ? 'white' : '#495057',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Сетка товаров */}
      {filteredProducts.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '30px' 
        }}>
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              style={{
                border: '1px solid #e9ecef',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Картинка */}
              <div style={{ height: '200px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ 
                    maxHeight: '80%', 
                    maxWidth: '80%', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>

              {/* Информация о товаре */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ 
                  alignSelf: 'flex-start',
                  backgroundColor: '#e7f3ff', 
                  color: '#0070f3', 
                  fontSize: '12px', 
                  fontWeight: '700', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  marginBottom: '10px'
                }}>
                  {product.category}
                </span>
                
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 10px 0', color: '#111' }}>
                  {product.name}
                </h3>
                
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666', 
                  margin: '0 0 20px 0', 
                  lineHeight: '1.5',
                  flexGrow: 1 
                }}>
                  {product.description}
                </p>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginTop: 'auto' 
                }}>
                  <span style={{ fontSize: '20px', fontWeight: '800', color: '#111' }}>
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  
                  <button style={{
                    padding: '10px 16px',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}>
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <h3>Товары не найдены 🔍</h3>
          <p>Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
        </div>
      )}
    </div>
  );
}

export default Home;
