const WEATHER_API_KEY = "7LZ3UZ8HPKTW32GL3TTZ72XMP"
const GIPHY_API_KEY = "6Zpwmbu72An4ImxUruwXQkvVncn0DKdO"


async function getWeather(location="London")
{
    console.log("Getting weather for " + location)
    console.log("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"?unitGroup=us&include=current&key="+WEATHER_API_KEY+"&contentType=json")
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"?unitGroup=us&include=current&key=7LZ3UZ8HPKTW32GL3TTZ72XMP&contentType=json")
    const weatherData = await response.json()
    console.log(weatherData.days[0].conditions)
    return weatherData.days[0].conditions
}

async function getGif(searchCriteria="cats")
{
    //https://api.giphy.com/v1/gifs/translate?api_key=$'+GIPHY_API_KEY+'&s='+searchCriteria
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key='+GIPHY_API_KEY+'&s='+searchCriteria)
    const gifData = await response.json()
    console.log(gifData.data.images.original.url)
}

function updateWeather(location, weather)
{
    document.getElementById("weather-div").textContent = location + ": " + weather
}

const locationInput = document.getElementById("form-location-input")
document.getElementById("form-submit-input").addEventListener('click', (e)=>{ 
    const location = locationInput.value
    console.log(location)
    getWeather(location).then((v) => {updateWeather(location, v)})
    //updateWeather(location, weather.value)
    e.preventDefault()
})