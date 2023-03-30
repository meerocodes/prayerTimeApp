import './App.css';
import UserSearch from './component/UserSearch';
import Header from './component/Header';
import Qibla from './component/Qibla';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import { AuthContextProvider } from './component/context/AuthContext';
import { Link, Route, Routes } from 'react-router-dom';
import { Auth } from 'firebase/auth';
import Home from './component/Home';
import Footer from './component/Footer';
import ProtectedRoute from './component/ProtectedRoute';


function App() {
  return (
    <div className="App">
      
      <AuthContextProvider>
      <Routes>
        <Route path='/' element ={<SignIn />}/>
        <Route path='/signup' element ={<SignUp />}/>
        <Route path='/home' 
        element ={
        <ProtectedRoute>
          <Home />
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer/>

    </AuthContextProvider>
    
    </div>
  );
}

export default App;
