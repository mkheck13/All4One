let magic8Input = document.getElementById("magic8Input");
let magic8Output = document.getElementById("magic8Output");
let submitBtn = document.getElementById("submitBtn");


async function Magic8Endpoint(){
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/Magic8Ball/Fortune/`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    let getData = await Magic8Endpoint();
    magic8Output.textContent = getData;
});

magic8Input.addEventListener('keydown', async (event) => {
    if(magic8Input.value){
        if(event.key === "Enter"){
            let getData = await Magic8Endpoint();
            magic8Output.textContent = getData;
        }
    }
});




//  (`https://all4oneapi.azurewebsites.net/Magic8Ball/Fortune/`);