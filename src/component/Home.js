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

        }catch (e) {
            alert('Failed to logout, please try again')
        }
    }
return(
        <>
            <nav>
                <div className="wrapper">
                    <h2>Salam, {user ? localStorage.getItem("name") : user.email}</h2> <button onClick={handleLogout}>logout</button>
                </div>
            </nav>

            <Header />

            <UserSearch />
        </>
    )

}

export default Home;