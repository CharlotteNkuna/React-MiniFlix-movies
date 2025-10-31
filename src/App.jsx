import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Cart from './components/Cart';
import User from './components/User';

// ✅ PrivateRoute defined inside App.jsx
function PrivateRoute({ children }) {
  const currentUser = useSelector((state) => state.user?.currentUser);
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  return currentUser || loggedIn ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ Protected routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <User>
                  <Dashboard />
                </User>
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <User>
                  <Cart />
                </User>
              </PrivateRoute>
            }
          />

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
}
