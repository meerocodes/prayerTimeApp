import './App.css';
import UserSearch from './component/UserSearch';
import Header from './component/Header';
import Qibla from './component/Qibla';
import SignIn from './component/SignIn';
import { AuthContextProvider } from './component/AuthContext';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <SignIn />
      <Header />
      <UserSearch />
      <Qibla />

    </div>
  );
}

export default App;
