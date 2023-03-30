import { useState } from 'react';


const Form =(props) => {
  

    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="city">Enter a city:</label>
            <input onChange={props.handleChange} type="text" id="city" required></input>

            <label htmlFor="country">Enter a country:</label>
            <input onChange={props.handleChangeCountry}type="text" id="country" required></input>

            <select value={props.selectedValue} onChange={props.handleSelectChange} required>
                <option value="" disabled>--Choose a calculation method--</option>
                <option value="3">Muslim World League</option>
                <option value="2">Islamic Society of North America</option>
                <option value="4">Umm Al-Qura University, Makkah</option>
                <option value="10">Qatar</option>
                <option value="5">Egyptian General Authority of Survey</option>
                <option value="15">Moonsighting Committee Worldwide </option>
                <option value="8">Gulf Region</option>
                <option value="13">Diyanet İşleri Başkanlığı, Turkey</option>
            </select>
            <button className='homeSubmit'>Submit</button>


        </form>
    )

}

export default Form;