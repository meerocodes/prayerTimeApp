import { async } from '@firebase/util';
import React from 'react';
import {GoogleButton} from 'react-google-button';
import { Link } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import Home from './Home';

const SignIn = () => {
      const {googleSignIn} = UserAuth();

      const handleGoogleSignIn = async () => {
            try{
                  await  googleSignIn()
            }catch(error){
                  console.log(error)
            }
      };
      return (
            <section className="signIn">
              <div className="wrapper">
                <h1>Sign in to your account</h1>
                <p>Enter your email and password to sign in.</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                  </div>
                  <button type="submit">Sign In</button>
                </form>
                <div className="separator">or</div>
                <div className="google-button-container">
                  <Link to='/home' element={<Home/>}>
                    <GoogleButton onClick={handleGoogleSignIn} />
                  </Link>
                </div>
              </div>
            </section>
          );
        }


export default SignIn;