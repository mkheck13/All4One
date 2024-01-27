let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let submitBtn = document.getElementById("submitBtn");
let numOutput = document.getElementById("numOutput");

async function Add2Endpoint(numOne, numTwo){
    const promise = await fetch (`https://all4oneapi.azurewebsites.net/TwoToFourEndPoints/AddTwo/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    if(numOne.value && numTwo.value){
        let getData = await Add2Endpoint(numOne.value, numTwo.value);
        numOutput.textContent = getData;
    }
});

numTwo.addEventListener('keydown', async (event) => {
    if(numOne.value && numTwo.value){
        if(event.key === "Enter"){
            let getData = await Add2Endpoint(numOne.value, numTwo.value);
            numOutput.textContent = getData;
        }
    }
});

numOne.addEventListener('keydown', async (event) => {
    if(numOne.value && numTwo.value){
        if(event.key === "Enter"){
            let getData = await Add2Endpoint(numOne.value, numTwo.value);
            numOutput.textContent = getData;
        }
    }
});
