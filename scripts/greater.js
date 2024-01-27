let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let greatOutput = document.getElementById("greatOutput");
let submitBtn = document.getElementById("submitBtn");

async function GreaterEndpoint(numOne, numTwo){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/TwoToFourEndPoints/GreaterThanController/${numOne}/${numTwo}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    if(numOne.value && numTwo.value){
        let getData = await GreaterEndpoint(numOne.value, numTwo.value);
        greatOutput.textContent = getData;
    }
});

numTwo.addEventListener('keydown', async (event) => {
    if(numOne.value && numTwo.value){
        if(event.key === "Enter"){
            let getData = await GreaterEndpoint(numOne.value, numTwo.value);
            greatOutput.textContent = getData;
        }
    }
});

numOne.addEventListener('keydown', async (event) => {
    if(numOne.value && numTwo.value){
        if(event.key === "Enter"){
            let getData = await GreaterEndpoint(numOne.value, numTwo.value);
            response.textContent = getData;
        }
    }
});








//(`https://all4oneapi.azurewebsites.net/GreaterThanController/{numOne}/{numTwo}`)