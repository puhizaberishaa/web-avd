var x = 5

if (x > 2){
    console.log("x is greater than 2") // this block runs if the condition is true
}else{
    console.log("x is not greater than 2")
}

var input = document.getElementById ["input_id"];
var button = document.getElementById ["btn_id"];
var text = document.getElementById ["text_id"];

button.onclick = function(){
text.innerHTML = input.value;};

//Challenge: Add two other inputs to get values and calculate the sum of values
 //and show it on a heading when a button is clicked.

 function calculateSum() {
    // Get the values from inputs
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    // Convert values to numbers
    number1 = Number(number1);
    number2 = Number(number2);

    // Calculate sum
    let sum = number1 + number2;

    // Show result on heading
    document.getElementById("result").innerText = "The sum is: " + sum;
}
