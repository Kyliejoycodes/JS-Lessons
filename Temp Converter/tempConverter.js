const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toF.checked){
        temp = Number(textBox.value);
        temp=temp*9/6+32;
        result.textContent = temp.toFixed(1) + " Farenheit";
    } else if(toC.checked){
        temp = Number(textBox.value);
        temp=temp-32*(5/9);
        result.textContent = temp.toFixed(1) + " Celcius";
    }else{
        result.textContent="select a unit";
    }

}