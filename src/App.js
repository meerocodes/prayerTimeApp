import './App.css';
import UserSearch from './component/UserSearch';
import Header from './component/Header';
import Qibla from './component/Qibla';
import SignIn from './component/SignIn';
import { AuthContextProvider } from './component/AuthContext';
import { Link, Route, Routes } from 'react-router-dom';
import { Auth } from 'firebase/auth';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element ={<SignIn />}/>
        <Route path='/home' element ={<Home />}/>
      </Routes>
      <Footer/>

    </AuthContextProvider>
    
    </div>
  );
}

export default App;
