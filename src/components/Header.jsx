import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header({ onLogout }) {
  // Use optional chaining and default to empty array
  const cartItems = useSelector(state => state.cart?.items || []);
  const currentUser = useSelector(state => state.user?.currentUser);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#111', color: '#fff' }}>
      <h1>MyNetflix</h1>
      <nav>
        <Link to="/dashboard" style={{ color: '#fff', marginRight: '10px' }}>Home</Link>
        <Link to="/cart" style={{ color: '#fff', marginRight: '10px' }}>Cart ({cartItems.length})</Link>
        {currentUser && <>
          <span style={{ marginRight: '10px' }}>Hi, {currentUser.email}</span>
          <button onClick={onLogout}>Logout</button>
        </>}
      </nav>
    </header>
  );
}
