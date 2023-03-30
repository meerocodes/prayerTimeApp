import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Display from "./Display";

const UserSearch = () => {

    // inititlaize state to rep the data returning from the API
    const [prayer, setPrayer] = useState ([]);

    const[submitted, setSubmitted] = useState(false);

    // 1A. initialize state to represent API request error
    // if the API does NOT return data, update state to true!
    const [ apiError, setApiError ] = useState(false);

    const [ cityInput, setCityInput ] = useState("");
    const [ countryInput, setCountryInput ] = useState("");

    const [ selectedValue, setSelectedValue] = useState('disabled')

    const handleSelectChange =(e) => {
        const value = parseInt(e.target.value);
        setSelectedValue(value);
    }


    // 2. define a submit event handler which will be passed down via props to the Form component
        // when this event handler func is called (i.e. when the form is submitted) it will trigger a call to the Weather API
        const handleSubmit = (e) => {
            // prevent the form submission from refreshing the page
            e.preventDefault();
            // call the function which will fetch data from the API
            setSubmitted(!submitted)

            axios({
                url: 'https://api.aladhan.com/v1/timingsByCity/:date',
                params: {
                    city: cityInput,
                    country: countryInput,
                    method: selectedValue,
                }
        
            }).then((apiData) => {
    
                setPrayer(apiData.data.data.timings)
                 // use the state updater function to update the form error state to false
                 setApiError(false);
            })
            .catch(() =>{
                // if an error is 'caught' (AKA if the API call results in an error), we are going to update the apiError state to true
                setApiError(true);
                alert('please enter a valid city/country')
                setPrayer("");
            })

        }

        const handleChange = (e) => {

            if (e.target.value === ''){
                setPrayer ({});
            }
            setCityInput(e.target.value)
        }

        const handleChangeCountry = (e) => {

            if (e.target.value === ''){
                setCountryInput ('');
            }
            setCountryInput(e.target.value)
        }
    





  
    return(
       
        <main className="main">
            
                <Form 
                handleChange ={handleChange}
                handleChangeCountry= {handleChangeCountry}
                handleSubmit={handleSubmit}
                handleSelectChange={handleSelectChange}
                />
            <div className="wrapper">
                <Display prayerEntries={Object.entries(prayer)} />


            </div>
        </main>
        
       
       

    )
}

export default UserSearch;