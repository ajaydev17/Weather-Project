// Initiate storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initiate weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Initiate UI
const ui = new UI();

// On page reload
document.addEventListener("DOMContentLoaded", getWeather);

// On location change
document.getElementById("w-change-btn").addEventListener("click", (event) => {
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;

    // Change location
    weather.changeLocation(city, country);

    // Set local storage
    storage.setLocationData(city, country);

    //call getWeather
    getWeather();

    // Close modal
    $("#locModal").modal("hide");
    console.log("clicked");
});

function getWeather() {
    weather
        .getWeather()
        .then((result) => {
            ui.paint(result);
        })
        .catch((err) => {
            console.log(err);
        });
}
