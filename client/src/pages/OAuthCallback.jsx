import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    } else {
      navigate('/home');
    }
  }, [navigate]);

  return <div style={{textAlign: 'center', marginTop: '3rem', color: '#fff'}}>Signing you in...</div>;
} 