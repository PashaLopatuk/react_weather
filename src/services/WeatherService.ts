import { AxiosResponse } from 'axios'
import api from 'axios'
import { Weather } from '../store/types/types'

export class WeatherService {
    static getCurrentWeather(city: string) :
    Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=69a82dfc91b64607c1a61e91e706a10b`)
    }  
}