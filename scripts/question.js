let names = document.getElementById("names");
let time = document.getElementById("time");
let submitBtn = document.getElementById("submitBtn");
let twoqOutput = document.getElementById("twoqOutput");




async function questionEndpoint(names, time) {
    const promise = await fetch(`https://all4oneapi.azurewebsites.net/twotofourendpoints/twoquestions/${names}/${time}`);
    const data = await promise.text();
    // console.log(data);
    return data;
}

// questionEndpoint();

submitBtn.addEventListener('click', async () => {
    if(names.value && time.value){
        let getData = await questionEndpoint(names.value, time.value);
        twoqOutput.textContent = getData;
    }
});

names.addEventListener('keydown', async (event) => {
    if(names.value && time.value){
        if(event.key === "Enter"){
            let getData = await questionEndpoint(names.value, time.value);
            twoqOutput.textContent = getData;
        }
    }
});

time.addEventListener('keydown', async (event) => {
    if(names.value && time.value){
        if(event.key === "Enter"){
            let getData = await questionEndpoint(names.value, time.value);
            twoqOutput.textContent = getData;
        }
    }
});