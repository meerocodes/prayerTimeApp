import Header from "./Header"
import UserSearch from "./UserSearch"
import { AuthContextProvider } from "./AuthContext"

const Home = ()  => {
return(
        <>
            <h2>Hey, {localStorage.getItem("name")}</h2>

            <Header />

            <UserSearch />
        </>
    )

}

export default Home;