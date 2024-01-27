let madName = document.getElementById("madName");
let madCity = document.getElementById("madCity");
let madDrink = document.getElementById("madDrink");
let madWeather = document.getElementById("madWeather");
let madOutput = document.getElementById("madOutput");
let submitBtn = document.getElementById("submitBtn");

async function MadlibEndpoint(madName, madCity, madDrink, madWeather){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/Madlib/${madName}/${madCity}/${madDrink}/${madWeather}`);
    const data = await promise.text();
    return data;

    
}

submitBtn.addEventListener('click', async () => {
    if(madName.value, madCity.value, madDrink.value, madWeather.value){
        let getData = await MadlibEndpoint(madName.value, madCity.value, madDrink.value, madWeather.value);
        madOutput.textContent = getData;
    }
});





//(`https://all4oneapi.azurewebsites.net/Madlib/${madName}/${madCity}/${madDrink}/${madWeather}`)