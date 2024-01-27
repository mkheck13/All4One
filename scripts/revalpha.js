let alphaInput = document.getElementById("alphaInput");
let alphaOutput = document.getElementById("alphaOutput");
let submitBtn = document.getElementById("submitBtn");

async function ReverseItAlphaEndpoint(alphaInput){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/RevAlpha/${alphaInput}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    if(alphaInput.value){
        let getData = await ReverseItAlphaEndpoint(alphaInput.value);
        alphaOutput.textContent = getData;
    }
});

alphaInput.addEventListener('keydown', async (event) => {
    if(alphaInput.value){
        if(event.key === "Enter"){
            let getData = await ReverseItAlphaEndpoint(event.target.value);
            alphaOutput.textContent = getData;
        }
    }
});



//   (`https://all4oneapi.azurewebsites.net/RevAlpha/RevAlpha/${alphaInput}`);