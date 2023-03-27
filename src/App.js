import './App.css';
import UserSearch from './component/UserSearch';
import Header from './component/Header';
import Qibla from './component/Qibla';
import {signInWithGoogle} from './component/FirebaseConfig';

function App() {
  return (
    <div className="App">
          <button onClick={signInWithGoogle}>Sign in </button>
          <h2>Salam, {localStorage.getItem("name")}</h2>

      <Header />
      <UserSearch />
      <Qibla />

    </div>
  );
}

export default App;
