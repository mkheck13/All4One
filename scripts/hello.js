let helloInput = document.getElementById("helloInput");
let helloOutput = document.getElementById("helloOutput");
let submitBtn = document.getElementById("submitBtn");

async function SayHelloEndpoint(helloInput){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/Controller/Greeting/${helloInput}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    if(helloInput.value){
        let getData = await SayHelloEndpoint(helloInput.value);
        helloOutput.textContent = getData;
    }
});

helloInput.addEventListener('keydown', async (event) => {
    if(helloInput.value){
        if(event.key === "Enter"){
            let getData = await SayHelloEndpoint(event.target.value);
            helloOutput.textContent = getData;
        }
    }
});





//  https://all4oneapi.azurewebsites.net/twotofourendpoints/Controller/Greeting/${helloInput}