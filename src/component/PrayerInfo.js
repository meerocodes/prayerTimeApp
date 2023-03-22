import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PrayerInfo = () => {

    const [prayer, setPrayer] = useState ({});


    useEffect( () => {

        axios({
            url: 'http://api.aladhan.com/v1/timingsByCity/:date',
            params: {
                city:'Toronto',
                country: 'Canada',
                method: 7,
            }
    
        }).then((apiData) => {
            console.log(apiData)

            setPrayer(apiData.data.timings)
        })




    })




}

export default PrayerInfo;