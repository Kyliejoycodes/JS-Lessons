//event listener - click, mouseover, mouseout, 
//.addEventListener(event,  callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", event =>{
    myBox.style.backgroundColor = "lightpink";
    myBox.textContent = "I think you're the zest!🍋";
});

myButton.addEventListener("mouseover", event =>
{
    myBox.style.backgroundColor = "purple";
    myBox.textContent = "Guess What? 🥰";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightpurple";
    myBox.textContent = "Hey Valentine💕";
})



//event listener - keydown, keyup, keypress(not compatible for all browsers)
//document.addEventListener(event, callback);

const box = document.getElementById("box");
const moveAmount = 10;
let x =0;
let y = 0;


document.addEventListener("keydown", event =>
{
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown" :
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight" :
                 x += moveAmount;
                break;
        }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;
    }
});

document.addEventListener("keydown", event => {
    box.textContent = "🐭";
});
document.addEventListener("keyup", event => {
    box.textContent = "🐰";
});


const button2 = document.getElementById("button2");
const myImg = document.getElementById("myImg");

button2.addEventListener("click", event => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        button2.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        //change display to visibility if u want to reserve space ==="hidden" and ="visible"
        button2.textContent = "Show";
    }
    
});
