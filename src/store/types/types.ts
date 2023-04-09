export type Weather = {
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number,
};

export type City = {
    value: string,
    label: string,
}