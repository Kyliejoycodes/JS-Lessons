//const min =50;
//const max = 100;


//let randomNum = Math.floor(Math.random()*100 + 1);
//let randomNum = Math.floor(Math.random()*(max-min)) + min;

const myButton = document.getElementById("myButton");
const myLabel= document.getElementById("myLabel");

const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}


console.log(randomNum);