import dayjs, { type Dayjs } from 'dayjs';
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
// interface Coordinates {
//   name: string;
//   lat: number;
//   lon: number;
//   country: string;
//   state: string;
// }

// TODO: Define a class for the Weather object
export class Weather {
  city: string;
  date: Dayjs | string;
  tempF: number;
  windSpeed: number;
  humidity: number;
  icon: string;
  iconDescription: string;
  constructor(
    city: string,
    date: Dayjs | string,
    tempF: number,
    windSpeed: number,
    humidity: number,
    icon: string,
    iconDescription: string
  ) {
    this.city = city;
    this.date = date;
    this.tempF = tempF;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
    this.icon = icon;
    this.iconDescription = iconDescription;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  
  baseURL?: string;

  apiKey?: string;

  city = '';

  constructor(
  ) {
    this.baseURL = process.env.API_BASE_URL || '';

    this.apiKey = process.env.API_KEY || '';
  }
  // TODO: method to fetch weather based on city
    async getWeatherForCity(city: string){
            this.city = city;
            const coordResponse = await fetch(`${this.baseURL}/geo/1.0/direct?q=${this.city}&limit=1&appid=${this.apiKey}`);
            const parsedCoord = await coordResponse.json();

            const parsedName = parsedCoord[0].name;
            const lat = parsedCoord[0].lat;
            const lon = parsedCoord[0].lon;

            const response = await fetch(`${this.baseURL}/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,
              &units=imperial&appid=${this.apiKey}`);
              console.log(response);
            const parsedResponse = await response.json();

            const weatherArray: Weather[] = [];

            const currentDayWeather = new Weather(parsedName, dayjs(), parsedResponse.current.temp, parsedResponse.current.wind_speed, 
          parsedResponse.current.humidity, parsedResponse.current.weather.icon, parsedResponse.current.weather.description);
          weatherArray.push(currentDayWeather);

          for (let i = 0; i<5; i++){
            const forecastWeather = new Weather(parsedName, dayjs().add(i + 1, 'day'), parsedResponse.daily[i].temp.max, 
            parsedResponse.daily[i].wind_speed, parsedResponse.daily[i].humidity, parsedResponse.daily[i].weather.icon, 
            parsedResponse.daily[i].weather.description);
          weatherArray.push(forecastWeather);
          }          
          return weatherArray;
          }

        }

//       const cityCoords: Coordinates [] = await this.cityToCoordinates(city);
//    try {
//        const response = await fetch(
//       `${this.baseURL}/data/2.5/weather?lat=${cityCoords[0].lat}&lon=${cityCoords[0].lon}&appid=${this.apiKey}`
//       );

//       const cityWeather = await response.json();

//       const weather = new Weather(
//         cityWeather.name,
//         dayjs().format('MM/DD/YYYY'),
//         cityWeather.main.temp,
//         cityWeather.wind.speed,
//         cityWeather.main.humidity,
//         cityWeather.weather[0].icon,
//         cityWeather.weather[0].description
//       )

//       return weather;
//     } catch (err:any) {
//       console.error('Error:', err);
//       throw new Error(err)
//     }
//   }
//     async cityToCoordinates(city: string){
//       try {
//         const response = await fetch (
//           `${this.baseURL}/geo/1.0/direct?q=${city}&appid=${this.apiKey}`
//         )
//         const location = await response.json();
//         const coords =                                                                   ////
//           const coordObject: Coordinates = {
//             name: location.name,
//             lat: location.lat,
//             lon: location.lon,
//             country: location.country,
//             state: location.state,
//           };
//           return coordObject;
//       } catch (err:any) {
//         console.error('Error:', err);
//         throw new Error(err)
//       }
//     }

//   // TODO: method to fetch 5 day forecast based on lon and lat 
// async getForecastForCity(city: string){
//   const cityCoords: Coordinates = await this.cityToCoordinates(city);

//   try {
//     const response = await fetch(
//    `${this.baseURL}/data/2.5/weather?lat=${cityCoords.lat}&lon=${cityCoords.lon}&appid=${this.apiKey}`
//     );
//     const cityForecast = await response.json();
//     const forecastArray = cityForecast.list.map((forecast: any) => {
//       return new Weather(
//         city,
//         forecast.dt_txt,
//         forecast.main.temp,
//         forecast.wind.speed,
//         forecast.main.humidity,
//         forecast.weather[0].icon,
//         forecast.weather[0].description
//       );
//     });
//     return forecastArray;
//   }  catch (err:any) {
//     console.error('Error:', err);
//     throw new Error(err)
// }

//   // TODO: method to build and return your array of weather objects
// }
// }

export default new WeatherService();

// import dotenv from 'dotenv';
// dotenv.config();

// // TODO: Define an interface for the Coordinates object
// interface Coordinates {
//   lat: number;
//   lon: number;
// }

// // TODO: Define a class for the Weather object
// class Weather {

// }

// // TODO: Complete the WeatherService class
// class WeatherService {
//   // TODO: Define the baseURL, API key, and city name properties
//   private baseURL?: string;
//   private apiKey?: string;
//   private cityName: string;

//   constructor(
//     cityName: string
//   ){
//     this.baseURL = process.env.API_BASE_URL || '';
//     this.apiKey = process.env.API_KEY || '';
//     this.cityName = cityName;
//   }
//   // TODO: Create fetchLocationData method
//   private async fetchLocationData(query: string) {
//     try {
//       const response = await fetch(
//         `${this.baseURL}?q=${this.cityName}&appid=${this.apiKey}`
//       );

//       const cities = await response.json();

//       const mappedcities = await this.cityDataMapping(cities.data);
//       return mappedcities;
//     } catch (err) {
//       console.log('Error:', err);
//       return err;
//     }
//   }
//   // TODO: Create destructureLocationData method
//   private destructureLocationData(locationData: Coordinates): Coordinates {

//   }
//   // TODO: Create buildGeocodeQuery method
//   private buildGeocodeQuery(): string {}
//   // TODO: Create buildWeatherQuery method
//   private buildWeatherQuery(coordinates: Coordinates): string {}
//   // TODO: Create fetchAndDestructureLocationData method
//   private async fetchAndDestructureLocationData() {}
//   // TODO: Create fetchWeatherData method
//   private async fetchWeatherData(coordinates: Coordinates) {}
//   // TODO: Build parseCurrentWeather method
//   private parseCurrentWeather(response: any) {}
//   // TODO: Complete buildForecastArray method
//   private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
//   // TODO: Complete getWeatherForCity method
//   async getWeatherForCity(city: string) {}
// }

// export default new WeatherService();
