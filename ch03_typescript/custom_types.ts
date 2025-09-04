type WeatherDetailType = {
    weather: string;
    zipcode: string;
    temp?: number;
};

let weatherDetail: WeatherDetailType = {
    weather: "sunny",
    zipcode: "00000",
    temp: 30
};

const getWeatherDetail = (data: WeatherDetailType): WeatherDetailType => data;