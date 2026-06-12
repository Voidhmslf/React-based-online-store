function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e9ecef',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}>
      {/* Логотип */}
      <div style={{ 
        fontSize: '22px', 
        fontWeight: '800', 
        color: '#111', 
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ fontSize: '24px' }}>🛒</span>
        <span>SUPER SHOP</span>
      </div>

      {/* Навигация */}
      <nav style={{ 
        display: 'flex', 
        gap: '24px' 
      }}>
        <a href="#" style={{ 
          textDecoration: 'none', 
          color: '#0070f3', 
          fontWeight: '600',
          fontSize: '15px'
        }}>Главная</a>
        
        <a href="#" style={{ 
          textDecoration: 'none', 
          color: '#666', 
          fontWeight: '500',
          fontSize: '15px'
        }}>О нас</a>
        
        <a href="#" style={{ 
          textDecoration: 'none', 
          color: '#666', 
          fontWeight: '500',
          fontSize: '15px'
        }}>Контакты</a>
      </nav>

      {/* Кнопка Корзины */}
      <button style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 18px',
        backgroundColor: '#111',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.2s'
      }}>
        <span>Корзина</span>
        <span style={{
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '11px',
          fontWeight: '800'
        }}>
          0
        </span>
      </button>
    </header>
  );
}

export default Header;
