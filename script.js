//35 ml per kg
//up to 17 years = 40ml * weight
//18 years - 55 years = 35 ml
//55 years - 66 years = 30 ml
//+= 66 years = 25 ml

let inputWeight = document.getElementById("weight");
let inputAge = document.getElementById("age");
let inputWakeUp = document.getElementById("wakeUp");
let inputSleep = document.getElementById("sleep");

let result = document.getElementById("result")


function calculate(){
    console.log("Calculating...")
    let weight = inputWeight.value;
    let age = inputAge.value;
    let wakeUp = inputWakeUp.value;
    let sleep = inputSleep.value;

    function ageML(){
        if(age <= 17){
            return 40
        }
        else if(18 <= age && age < 55){
            return 35
        }
        else if(66 > age && age >= 55){
            return 30
        }
        else if(age >= 66){
            return 25
        }  
    }

    function timeTotal(){
        if(wakeUp < sleep){
            return sleep - wakeUp
        }
        else if(wakeUp > sleep){
            return - (wakeUp - sleep) 
        }
    }

    let ml = ageML();
    let time = timeTotal();

    let mlDay = weight * ml;
    let mlHour = mlDay / time;

    result.style.display = 'block'

    result.innerHTML = `<h2 class="title-result">You need to drink:</h2>`
    result.innerHTML += `<p class="resultP">${mlDay}ml per day;</p>
    <p class="resultP"> ${Math.ceil(mlHour)}ml per hour;</p>`
}
