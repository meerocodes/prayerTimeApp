import './App.css';
import UserSearch from './component/UserSearch';
import axios from 'axios';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <UserSearch />

    </div>
  );
}

export default App;
