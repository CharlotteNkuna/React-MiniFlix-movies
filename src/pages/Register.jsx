import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      alert('User already exists. Please login.');
      navigate('/login');
      return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br /> <br></br>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br /> <br></br>
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}
