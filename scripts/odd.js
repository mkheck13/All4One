let oddInput = document.getElementById("oddInput");
let oddOutput = document.getElementById("oddOutput");
let submitBtn = document.getElementById("submitBtn");

async function OddEndpoint(oddInput){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/OddOrEven/OddorEven/${oddInput}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    let getData = await OddEndpoint(oddInput.value);
    oddOutput.textContent = getData;
});

oddInput.addEventListener('keydown', async (event) => {
    if(oddInput.value){
        if(event.key === "Enter"){
            let getData = await OddEndpoint(event.target.value);
            oddOutput.textContent = getData;
        }
    }
});







//  (`https://all4oneapi.azurewebsites.net/OddOrEven/OddorEven/${oddInput}`)