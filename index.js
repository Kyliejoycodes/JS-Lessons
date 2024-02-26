console.log(`Hello`);
window.alert(`Hey there cutie, this is an alert`);

document.getElementById("myH1").textContent=`Hello`;
document.getElementById("myP").textContent='this is a JS paragraph  by using ids';

let age = 25;
let firstName = "Kylie";
let online =true;

console.log(age);
console.log(`You are ${age} years old`);
console.log(typeof firstName);
console.log(`Kylie is ${online}`);

document.getElementById("p1").textContent = `your name is ${firstName}`;

let students=30;
// exponents: students**= 2;
//students %= 2; is it even or odd-remainder
//students /= 2;
students++;
console.log(students);


//let username = window.prompt("Whats ur username");
//console.log(username);
let username;

//A- using html textbox
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("p1").textContent = `Hello ${Kylie}`;
}

//type conversion and const
const AGE2 = Number(age2);

//B- Number Counter
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");
let count = 0;

plus.onclick = function(){
    count++;
    countLabel.textContent = count;
}
minus.onclick = function(){
    count--;
    countLabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//C
let x = 3.21;
let z = Math.round(x);
let a = Math.floor(x);
let b = Math.ceil(x);
let c = Math.trunc(x);
let d =Math.pow(x, x);
let e = Math.sqrt(x);
let g =- Math.log(x);
let h = Math.sin(x);
let j = Math.abs(x);
let r = Math.sign(x);
let k = Math.max(x,x,x); //min

//if(x == 3){           && || !

//}
//else{

//}


//= assignment
//== comparison
//===strictly equal (datatypes equal)
//!= inequal
//!== strictly inequal


//while(name="kylie"){
  //  console.log("Hello kylie")
//}

//for(let i=0;i<3;i++){}

//C
const myCheck = document.getElementById("myCheck");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheck.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent(`You are not subscribed`);
    }
    if(visa.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(mastercard.checked){
        paymentResult.textContent = `Youb are paying with mastercard`;
    }
    else if(paypal.checked){
        paymentResult.textContent = `Youb are paying with mastercard`;
    }
    else{
        paymentResult.textContent = `Select paymernt type`;
    }
}

    //ternary operator - short of if else
    let message= age>=18? "Youre an adult" : "Ur a kid";


    //switches
    let day =1;

    switch(day){
        case 1:
            conasole.log("it is monday");
            break;
        case 2:
            console.log("it is tuesday");
            break;
        default:
            console.log("it is no day");
    }

    //string methods
    let name ="kylie";
    console.log(name.length);
    name = name.trim();
    name =name.toUpperCase(); //lowerCase
    name = name.repeat(3);
    name = name.padStart(10, "0"); //00000kylie //padEnd
    let result = name.startsWith(" "); //endsWith //includes
    const fullName = "kylie morgan";
    let first = fullName.slice(0,fullName.indexOf(" "));//kylie

    //method chaining
    name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();//kYliE to Kylie

    //nujmber guessing game
    const minN =0;
    const maxN = 100;
    const answer = Math.floor(Math.random*(maxN-minN +1));

    let attempts = 0;
    let guess;
    let running = true;
    while(running){
        guess = window.prompt("guess a number between 1 and 100");
        guess = Number(guess);

        if(isNaN(guess)){
            window.alert("Enter a number")
        }
        else if(guss<minN || guess>maxN){
            window.alert("Not valid try again");
        }
        else{
            attempts++;
            if(guess< answer){
                wiondow.aler("too low try again");
            }
            else if(guess>answer){
                window.alert("too high");
            }
            else{
                window.alert(`correct! the answer was ${answer} it took ${attempts} attempts`);
            }
        }



        running =false;
    }


    //FUNCTIONS
    function greeting(){
        console.log(`Hello ${name}`);
    }
    greeting("kylie");


    //variable scope- can use same variable name but needs to be in different scopes(iun function is local) out of is gloabl

    //arrays
    let fruits = ["apple", "orange", "banana"];
    console.log(fruits[0]);
    fruits[0] = "coconut";
    fruits.push("coconut");
    fruits.pop("coconut");
    fruits.unshift("mango");//.shift
    let nfruits = fruits.length;
    let findex = fruits.indexOf("apple");
    //fro shortcut
    for(let fruit of fruits){
        console.log(fruit);
    }
    fruits.sort();//.reverse();

    let numbs=[1,2,3,4,5];
    let maxi = Math.max(...numbs);  //... unpacks elements from package
    let namess =[...name, ...first].join("-");

    //rest psrametrers aare the opposite, combines variables into array with ...


    //password generator
    function generatePassword(lenght, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*)("

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowercaseChars: "";
        allowedChars += includeUppercase ? uppercaseChars: "";
        allowedChars += includeNumbers ? numberChars: "";
        allowedChars += includeSymbols ? symbolChars: "";

        if(length<= 0){
            return `(password length must be at least one)`;
        }
        if(allowedChars.length ===0){

            return`At least 1 set of characters must be selected`;
        }

        for(let i =0; i< length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        return password;

    }

    const passwordLength=12;
    const includeLowercase=true;
    const includeUppercase =true;
    const includeNumbers =true;
    const includeSymbols=true;

    const passwqord= generatePassword(passwordLength, incluideLowercase, includeUppercase, includeNumbers, includeSymbols);
    console.log(`Generate password: ${password}`);


    //callback - have program wait to read file until fucntion is done-make sure hello goes frirst even if it takes awhile
    hello(goodbye);
    function hello(callback){
        console.log("hello");
        callback();
    }
    function goodbye(){
    console.log("goodbye");
    }
    let nnn = [1,2,3,4,5];
    nnn.forEach(display);
    function display(element){
        console.log(element);
    } //.map makes new array


    //filters
    let evennnn = nnn.filter(isEven);
    function isEven(element){
        return element % 2 ===0;
    }

    //.reduce-> puts all array elements in to one
    const total = nnn.reduce(sum);
    function sum (accumulator, element){
        return accumulator + element;
    }


    //using functions as parameters
    setTimeout(function(){
        console.log("hello");
    }, 3000);

    //arrow functions, only used once
    const hi = (name)=> console.log(`hi ${name}`);


    //objects- object = {key: value, function()}
    const person = {
        firstname: "kylie",
        age: 18,
        isEmployed : true,
        sayhi: () => console.log(`hi im ${this.firstname}`),
    }
    person.sayhi();
    console.log(person.firstname);
    //this - can be used to refrence current object

    //constructors- define properties and methods of objects
    function car(make, model, year, color){
        this.make = make,
        this.model = model,
        this.year = year,
        this.color = color
    }
    const car1 = new car("ford ", "miustang", 2024, "red");

    //classes easier way to woerk with objects              
    class car{
        constructor(make, model){this.make= make, this.model=model}
        display(){console.log(`Car ${make}`)};
    }
    car1.display();

    //static - defines properties or methods that belong to a class

    //inhheiritance
    class animal{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        alive = true;

        eat(){
            console.log(`the ${this.name} is eating`)
        }
    }
    class rabbit extends animal{
        constructor(name, age, speed){
            this.super(name, age);
            this.speed = speed;

            super.eat(this.name);
        }
    }
    const rabbit = new rabbit();
    console.log(rabbit.alive);
    rabbit.eat();
    //super call constructor or access parent class of object  
    //if multiple children share values, call parent constructor so you dont have top repeat code


    //getter-adding additional information, writting
    //setter-input validation, reading
    class rectangle{
        constructor(width, height){
            this.width = width;
            this.height = height;
        }
        set width(newWidth){
            if(newWidth>0){
                this._width = newWidth;//_ is private
            }else{
                console.error("Width must be positive");
            }
        }
        set height(newHeight){
            if(newHeight>0){
                this._height = newHeight;//_ is private
            }else{
                console.error("Height must be positive");
            }
        }
        get Width(){
            return this._width;
        }
        get Height(){
            return this._height;
        }
    }
    //const rect = new rectangle(-10000, pizza);

    //deconstructor- extract values from arrays and objects, assign them to variables. [array], {object}
    let aa =1; 
    let bb=2;
    [a,b]=[b,a]
    const colors=["r", "g", "b", "w"]
    const[firstt, second, ...extra]=colors;
    console.log(extra); //==[b,w]  
    
    function displayP({name, age, job}){
        console.log("name");
    }
    const person1 ={
        name :"kyle",
        age:18,
        job:"engineer",
        address:{
            street:"123",
            city:"waterloo"
        }
    }
    displayP(person1);
    console.log(person1.address.city);
    //nested objects
    //person{address{}, contact{}}
    for(const property in person1.address){
        console.log(person1.address[property]);//loop through all address objects
    }

    const classes = [{namee:"math", code:"119"}, {namee:"physics", code:"106"}];
    classes[0].namee;
    classes.push({namee:"math", code:"192"});
    classes.pop();
    classes.splice(1,2);
    classes.forEach(classs => console.log(classs.namee));
    const classname = classes.map(classs => classs.namee);//makes new array
    const maths = classes.filter(classs => classs.name ==="math");//filter
    const topclass = classes.reduce((max, classs) =>   //reduce
                                    classs.code>max.code ?
                                    classs: max);
    classes.sort((a,b) => a.name.localeCompare(b.name));//lexicographigally-treating them as strings
    classes.sort((a, b) => a.code-b.code);

    //shuffling order of arrays
    const numbb = [1,2,3,4,5,6,7,8,9];
    shuffle(numbb);
    function shuffle(array){
        for(let i = array.length-1; i>0;i--){
            const r = Math.floor(Math.random() * (i+1));
            [array[i], array[r]]=[array[r], array[i]];
        }
    }


    //date objects - parmas Date(year, month, day, hour, minute, second, ms)
    const date = new Date();
    //const year = date.getFullYear();
    //const month = date.getMonth();
    //const day = date.getDate();
    //const hour = date.getHours();
    //const minutes = date.getMinutes();
    const daay = date.getDay();
    //.......
    date.setFullYear(2025);
    date.setMonth(1);
    //date, hours, minutes, seconds...
    console.log(date);//current date



    //closure- function defined in another function
    function outer(){
        let name;
        function inner(){
            name = "kyle"
        }
        inner();
    }
    outer();

    //setTimeout-schedule execution
   // function sayHello(){
     //   window.alert("hello");

    //}
    function timer(){
    //const time = setTimeout(sayHello, 3000); 
    timeoutId = setTimeout(() => window.alert("hello"), 3000);
     }
     function clearTimer(){
        clearTimeout(timeoutId); //cancels
     }




     //module
     import{PI, getCircumfrence, getArea} from './mathUtil.js';

     //error handling
     try{
        console.log("try code that may have an error");
        const div = window.prompt("enter non zero");
        if(div == 0){
            throw new Error("dont enter 0");
        }
     }
     catch(error){
        console.error(error);//if it does, catch the error and run the rerst of the code without interuption
     }
     finally{
        //close files, close connections, release resources
     }



     //DOM-the structure of a HTML file
     document.title = "Changing the DOM";
     document.body.style.backgroundColor = "pink";
     //const username = "kylie";
     const welcomeMsg = document.getElementById("welcome-msg");
     welcomeMsg.textContent += username === " " ? `Guest` : username;


     //element selectors - target  and change html elements from the dom
     //document.getElementById()
     //document.getElementsClassName()
     //document.getElementsByTageName()
     //const h1Elements = document.getElementsByTageName("h1");
     //h1Elements[0].style.backgroundColor = "yellow"
     //document.querySelector()
     //document.querySelectorAll()

     //DOM NAVIGATION
     //const a = element.:
     //.firstElementChild
     //.lastElementChild
     //.nextElementSibling
     //.previousElementSibling
     //.parentElement
     //.children
     //a.style.backgroiundColor = "pink";

     //ADDING AND CHANGING HTML IN JS ONLY
     //create element, add attributes, append to DOM
     //const newH1 = document.createEWlement("h1");
     //newH1.textContent = "hello";
     //document.body.append(newH1)     // or prepend 
     //newH1.id = "myH1"
     //newH1.style.color = "grey";
     //document.getElementById("box1").append(newH1)   //add it mto another element in the doc


     //node lists
     //let buttons = document.querySelectorAll("click", event => {
       // event.target.style.backgroundColor = "blue";
     //});

     //promises - manage asynchronous objects pending -> resolved or rehjected
     //new Promise((resolve, reject)=> {asynchronous code})
     function walkDog(){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                const dogwalked = true;
                if(dogwalked){
                resolve("You walked dog");
                }else{
                    reject("Yopu didnt walk the dog");
                }
            }, 1500);
        });
     }

     // method chaining - walkDog().then(value => {console.log(value); return clean()}).then(value => {console.log(value); console.log("yopu finished the chores")}
     //.catch(error => console.error(error));


     //async and await - asyn makes function return  promise. await makes async function wait fopr promise, together gets rid of method chaining

     async function doChores(){
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
     }
     

     //JSON - Javascript object notation - exchange info between server and web application
     //JSON.stringify() = converts a JS object to a JSON string
     //JSON.parse() = converts a JSON string to a JS object

     const names = ["Kylie", "Kyle", "Kevin"];
     const Kylie = {
            "name":"Kylie",
            "age": 18,
            "isEmployed": true,
            "hobbies": ["coding", "karate"]
        };
    const people = [{
        "name":"Kylie",
        "age": 18,
        "isEmployed": true
    }, 
    {
        "name":"Kyle",
        "age": 18,
        "isEmployed": true
    },
    {
        "name":"Kevin",
        "age": 40,
        "isEmployed": true
    }]

    //using stringify

     const jsonString = JSON.stringify(names);
     const jsonString2 = JSON.stringify(Kylie);
     const jsonString3 = JSON.stringify(people);
     console.log(jsonString);

     //using parse
     const parsedData = JSON.parse(jsonString);
     const parsedData2 = JSON.parse(jsonString2);
     const parsedData3 = JSON.parse(jsonString3);

     //Fetching json file
     fetch("person.json")
        .then(response => response.json())
        .then(value => console.log(value))

        fetch("people.json")
        .then(response => response.json())
        .then(value => values.forEach(value =>console.log(value.name)))





