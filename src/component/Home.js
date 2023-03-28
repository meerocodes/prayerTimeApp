import Header from "./Header"
import UserSearch from "./UserSearch"

const Home = ()  => {
return(
        <>
            <h2>Salam, {localStorage.getItem("name")}</h2>

            <Header />

            <UserSearch />
        </>
    )

}

export default Home;