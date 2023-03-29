import Header from "./Header"
import UserSearch from "./UserSearch"
import { UserAuth } from "./context/AuthContext"
import { useNavigate } from "react-router-dom";

const Home = ()  => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async() => {
        try {
            await logout()
            navigate('/');
            console.log('you are logged out')

        }catch (e) {
            console.log(e.message)
        }
    }
return(
        <>
            <h2>Hey, {user ? user.email : localStorage.getItem("name")}</h2> <button onClick={handleLogout}>logout</button>

            <Header />

            <UserSearch />
        </>
    )

}

export default Home;