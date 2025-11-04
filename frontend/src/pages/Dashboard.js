import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="dashboard">
      <h2>Welcome, {user.full_name}!</h2>
      <p>Username: <strong>{user.username}</strong></p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}