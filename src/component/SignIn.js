import {signInWithGoogle} from './component/FirebaseConfig';
import GoogleButton from 'react-google-button';

const SignIn = () => {
      <>
    
            <GoogleButton onClick={signInWithGoogle} />
            <h2>Salam, {localStorage.getItem("name")}</h2>

      </>

      } 


export default SignIn;