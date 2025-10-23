import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px',
      minHeight: 'calc(100vh - 200px)',
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px', color: '#666' }}>
        Página não encontrada
      </p>
      <Link to="/" style={{
        display: 'inline-block',
        padding: '15px 40px',
        fontSize: '18px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
      }}>
        Voltar para Home
      </Link>
    </div>
  );
}
