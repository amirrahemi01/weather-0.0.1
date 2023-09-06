// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '77058e5088msh58a3d9ff5ec555dp117abajsn3b6cf921aa1f',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '77058e5088msh58a3d9ff5ec555dp117abajsn3b6cf921aa1f',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5" 
export const WEATHER_API_KEY = "70a5a1b722a7764f4d43b280e79cedc9" 
