//35 ml per kg
//up to 17 years = 40ml * weight
//18 years - 55 years 

let inputWeight = document.getElementById("weight");
let inputAge = document.getElementById("age");
let inputWakeUp = document.getElementById("wakeUp");
let inputSleep = document.getElementById("sleep");

let result = document.getElementById("result")


function calculate(){
    console.log("Calculating...")
    let ml = 40;
    let weight = inputWeight.value;
    let age = inputAge.value;
    let wakeUp = inputWakeUp.value;
    let sleep = inputSleep.value;

    function ageML(age){
        if(age <= 17){
            return ml
        }
        else if(age >= 18){
            return ml = 35
        }
        else if(age >= 55){
            return ml = 30
        }
        else{
            return ml = 25
        }       
    }

    function timeTotal(){
        if(wakeUp > sleep){
            return (sleep - wakeUp)
        }
        else if(sleep > wakeUp){
            return (wakeUp - sleep)
        }
    }

    let mlDay = weight * ageML(age)
    let mlHour = weight * ageML(age) / timeTotal();

    result.style.display = 'block'

    result.innerHTML = `<h2 class="title-result">You need to drink:</h2>`
    result.innerHTML += `<p class="resultP">${mlDay}ml per day;</p>
    <p class="resultP"> ${Math.ceil(mlHour)}ml per hour;</p>`
}