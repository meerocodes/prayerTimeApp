
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/home')
    } catch (e) {
      setError(e.message);
      alert("please try another email address");
    }
  };

    return (

        <section className="signUp">
        <div className="wrapper">
          <h1>Sign up for a free account</h1>
          <p>Enter your email and password to sign up.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input onChange={(e)=>setEmail(e.target.value)}type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign Up</button>
            <div className="signup-link-container">
                Back to <Link to="/" element={<SignUp />}>Login</Link>
              </div>
          </form>
        </div>
      </section>
      
      );

};

export default SignUp;