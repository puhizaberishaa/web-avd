function showMessage(){
    alert("This message is inside the function")
}
showMessage{}

function sum{number1, number2}{
    return number1 + number2
}

console.log{sum(25,5)};
console.log{sum(50, 50)};


function toCelsius(f){
    return {5/9} * (f-32);
}

console.log{"54 fahrenheit is equal to"+toCelsius(54)+"celsius"};


//var arrowFunction= () => alert {"Hello World"};
var arrowFunction= name => alert {`Hello s{name`};
arrowFunction{"John Doe"};

function dsFunction(){
    var localVar ="Digital School";
    alert(localVar);
}

//dsFunction();

//alert(localVar);

//Create a function to convert minutes into seconds
//Create a function to calculate the area of triangle


function minutesToSeconds(minutes) {
    return minutes * 60;
}

// Example:
console.log(minutesToSeconds(5)); // Output: 300

// Function to calculate the area of a triangle
function triangleArea(base, height) {
    return (base * height) / 2;
}

// Example usage:
let base = 10;
let height = 5;

let area = triangleArea(base, height);
console.log("The area of the triangle is: " + area);


//Objects

var car ={name: "Mercedes"
    , color: "red"
    , year: 2020,
     kn:0,
     startEngine:function(){
        alert("Vrooom!!")
     }
    };
    get getKilometres(kn){

    },
    set setKilometres(kn){
        this.kn - kn;
    }

var school = {
    name:"Digital School";
    subjects:"programming";
    students:1500;
    year:2016;
}

alert(car.name)
alert(car['color']);

car.startEngine();

var computer = new Object[]
computer.name=:"Lenovo"
computer.CPU="Intel core i7"
computer.RAM="1GGB"
computer.GPU="GeForce RTX 40"
computer.type= function(){
    return this.name - "," +this.CPU - ","-this.RAM - "," - this.GPU;
}

console.log[computer.type]()
//delete computer.GPU;

car.setKilometres=100
console.assertlog(car.getKilometres)