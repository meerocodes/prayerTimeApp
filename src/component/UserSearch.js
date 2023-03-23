import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Form from "./Form";

const UserSearch = () => {

    // inititlaize state to rep the data returning from the API
    const [prayer, setPrayer] = useState ({});

    // 1A. initialize state to represent API request error
    // if the API does NOT return data, update state to true!
    const [ apiError, setApiError ] = useState(false);

    const [ cityInput, setCityInput ] = useState("");
    const [ countryInput, setCountryInput ] = useState("");




    // 2. define a submit event handler which will be passed down via props to the Form component
        // when this event handler func is called (i.e. when the form is submitted) it will trigger a call to the Weather API
        const handleSubmit = (e) => {
            // prevent the form submission from refreshing the page
            e.preventDefault();
            // call the function which will fetch data from the API

        }

        const handleChange = (e) => {

            if (e.target.value === ''){
                setCityInput ('');
            }
            setCityInput(e.target.value)
        }






    useEffect( () => {

        axios({
            url: 'http://api.aladhan.com/v1/timingsByCity/:date',
            params: {
                city:'Toronto',
                country: 'Canada',
                method: 7,
            }
    
        }).then((apiData) => {
            console.log(apiData.data.data.timings)

            setPrayer(apiData.data.timings)
             // use the state updater function to update the form error state to false
             setApiError(false);
        })

    })
    return(
        <>
            <main className="wrapper">
                <Form 
                handleChange ={handleChange}
                handleSubmit={handleSubmit}/>
            </main>
        </>
    )
}

export default UserSearch;