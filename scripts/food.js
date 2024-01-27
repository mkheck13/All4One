let foodInput = document.getElementById("foodInput");
let foodOutput = document.getElementById("foodOutput");
let submitBtn = document.getElementById("submitBtn");



async function PickerEndpoint(foodInput){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/FoodPicker/${foodInput}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    if(foodInput.value){
        let getData = await PickerEndpoint(foodInput.value);
        foodOutput.textContent = getData;
    }
});

foodInput.addEventListener('keydown', async (event) => {
    if(foodInput.value){
        if(event.key === "Enter"){
            let getData =  await PickerEndpoint(event.target.value);
            foodOutput.textContent = getData;
        }
    }
});



//  (`https://all4oneapi.azurewebsites.net/Food/${choice}`);