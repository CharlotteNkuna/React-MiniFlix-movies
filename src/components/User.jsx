import React from 'react';
import { Navigate } from 'react-router-dom';

export default function User({ children }) {
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  return loggedIn ? children : <Navigate to="/login" />;
}
