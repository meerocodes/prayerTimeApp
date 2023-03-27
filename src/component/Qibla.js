import axios from "axios";

const Qibla = () => {


const options = {
  method: 'GET',
  url: 'https://qibla-direction.p.rapidapi.com/',
  params: {
    latitude: '33.8366', 
    longitude: '117.9143'},
  headers: {
    'X-RapidAPI-Key': 'f40ec548d8msh3a691818e788c62p10046djsn600084175838',
    'X-RapidAPI-Host': 'qibla-direction.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

}

export default Qibla;