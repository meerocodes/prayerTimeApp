import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {GoogleButton} from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';
import Home from './Home';
import SignUp from './SignUp';
import { AuthContextProvider } from './context/AuthContextGoogle';
import signInWithGoogle from './context/AuthContextGoogle';


// Email and Password SignIn
const SignIn = () => {
      const {signIn, googleSignIn, user} = UserAuth();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('')
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
            e.preventDefault();
            setError('')
            try{
                  await signIn(email, password)
                  navigate('/home')
            }catch(e) {
                  setError(e.message)
                  alert('Failed to log in, please try again')
            }
      };


// Google Sign in Button
      
      

      const handleGoogleSignIn = async () => {
            try{
                  await  googleSignIn();
            }catch(error){
            }
      };

      useEffect(() =>{
            if (user != null ) {
                  navigate ('/home');
            }
      }, [user])
      return (
            <section className="signIn">
            <div className="wrapper">
              <h1>Sign in to your account</h1>
              <p>Enter your email and password to sign in.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input onChange={(e)=> setEmail (e.target.value)} type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input onChange={(e)=> setPassword (e.target.value)} type="password" id="password" name="password" />
                </div>
                <button type="submit">Sign In</button>
              </form>
              <div className="separator">or</div>
              <div className="google-button-container">
                <Link to='/home' element={<Home/>}>
                  <GoogleButton onClick={signInWithGoogle} />
                </Link>
              </div>
              <div className="signup-link-container">
                Don't have an account? <Link to="/signup" element={<SignUp />}>Sign up</Link>
              </div>
            </div>
          </section>
          
          );
        }


export default SignIn;