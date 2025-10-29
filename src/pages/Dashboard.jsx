import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import { logout } from '../redux/userSlice';

export default function Dashboard() {
  const currentUser = useSelector(state => state.user?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!currentUser) navigate('/login');
  }, [currentUser, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!currentUser) return null; // prevent blank render

  return (
    <div>
      <Header onLogout={handleLogout} />
      <Home />
      <Footer />
    </div>
  );
}
