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
    let weight = inputWeight.value;
    let age = inputAge.value;
    let wakeUp = inputWakeUp.value;
    let sleep = inputSleep.value;
    let ml = ageML();

     function ageML(){
        if(age <= 17){
            return 40
        }
        else if(18 < age && age < 55){
            return 35
        }
        else if(66 > age && age > 55){
            return 30
        }
        else if(age >= 66){
            return 25
        }  

    function timeTotal(){
        if(wakeUp > sleep){
            return (sleep - wakeUp)
        }
        else if(sleep > wakeUp){
            return (wakeUp - sleep)
        }
    }

    let mlDay = weight * ageML();
    let mlHour = weight * ageML() / timeTotal();

    result.style.display = 'block'

    result.innerHTML = `<h2 class="title-result">You need to drink:</h2>`
    result.innerHTML += `<p class="resultP">${mlDay}ml per day;</p>
    <p class="resultP"> ${Math.ceil(mlHour)}ml per hour;</p>`
}
