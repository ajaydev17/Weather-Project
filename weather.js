class Weather {
    constructor(city, country) {
        this.apiKey = "Your api key goes here";
        this.city = city;
        this.country = country;
    }

    // Fetch weather data
    async getWeather() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
        );
        const responseData = await response.json();
        return responseData;
    }

    // Change location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}
