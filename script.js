// VARIABLES = var const let
const miles = document.getElementById('miles');
const kilometres = document.getElementById('kilometers');
const yards = document.getElementById('yards');
const inches = document.getElementById('inches');
const instruction = document.getElementById('instruction');
const form = document.getElementById('form');
const convert = document.getElementById('convert');
const output = document.getElementById('output');

let convertType;

miles.addEventListener('click', function(){
    convertType = "miles";
    instruction.innerHTML = 'Type in a number of miles';
})

kilometers.onclick = function(){
    convertType = "kilometers";
    instruction.innerHTML = 'Type in a number of kilometers';
}

function myFunction() {
    convertType = "yards";
    instruction.innerHTML = 'Type in a number of yards';
}

function myFunction2() {
    convertType = "inches";
    instruction.innerHTML = 'Type in a number of inches';
}
inches.onclick = function() {
    myFunction2()
}



// FORM SUBMIT
form.onsubmit = function(event){
    event.preventDefault();

    var number = document.getElementById('number').value;


   if (number) {
        if (convertType == "miles") {
            var result = (number * 1.60934).toFixed(2);
            // output.innerHTML = number + " " + "miles" + "=" + result + " kilometers";
            output.innerHTML = `${number} miles = ${result} kilometers`;
        } 
        else if (convertType == "kilometers") {
            var result = (number * 0.62137).toFixed(2);
            output.innerHTML = `${number} kilometers = ${result} miles`;
        }
        else if (convertType == "yards") {
            var result = number * 36;
            output.innerHTML = `${number} yards = ${result} inches`;
        }
        else if (convertType == "inches") {
            let result = number * 0.3;
            output.innerHTML = `${number} inches = ${result} yards`;
        }
   } 
   else {
        output.innerHTML = 'Please enter a value!'
   }


}