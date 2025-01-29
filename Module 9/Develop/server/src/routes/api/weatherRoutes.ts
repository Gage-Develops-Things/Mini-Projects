import { Router, type Request, type Response } from 'express';
import { Weather } from '../../service/weatherService.js';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  try {
    // const cityName = req.body.cityName;
    // const weatherData: Weather[] = [];
    // const currentWeather = await WeatherService.getWeatherForCity(cityName) as Weather;
    // console.log(currentWeather);
    // const forecastWeather = await WeatherService.getForecastForCity(cityName);
    // console.log(forecastWeather);
    // weatherData.push(currentWeather);
    // weatherData.push(...forecastWeather)
    let weatherArray: Weather [] = await WeatherService.getWeatherForCity(req.body.cityName);
    HistoryService.addCity(weatherArray[0].city);
    res.json(weatherArray);
  
  // TODO: save city to search history
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  try {
    const savedCities = await HistoryService.getCities();
    res.json(savedCities);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req:Request, res: Response) => {
  try {
    if (!req.params.id) {
      res.status(400).json({msg: 'City id is required' });
    }
    await HistoryService.removeCity(req.params.id);
    res.json({ success: 'City cuscessfully removed from search history'});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
