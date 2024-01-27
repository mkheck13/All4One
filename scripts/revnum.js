let numberInput = document.getElementById("numberInput");
let numberOutput = document.getElementById("numberOutput");
let submitBtn = document.getElementById("submitBtn");

async function ReverseItNumberEndpoint(numberInput){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/RevNum/${numInput}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    if(numberInput.value){
        let getData = await ReverseItNumberEndpoint(numberInput.value);
        numberOutput.textContent = getData;
    }
});

numberInput.addEventListener('keydown', async (event) => {
    if(numberInput.value){
        if(event.key === "Enter"){
            let getData = await ReverseItNumberEndpoint(event.target.value);
            numberOutput.textContent = getData;
        }
    }
});






//   (`https://all4oneapi.azurewebsites.net/Rin/RevNum/${numInput}`);