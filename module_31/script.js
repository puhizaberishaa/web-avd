for (i = 0; i < 5; i++){
   console.log=("The number is" + i);
}

//the number is 0
//the number is 1
//the number is 2
//the number is 3
//the number is 4


//for/in

var person ={
    fristname:"John",
    lastname : "Doe",
    age:26
};

var text =''
var x;
for(x in person){
    console.log(text+= person[x])};
;

//for/at

//Looping over a list 
var nares = ['Steve', 'Bill', 'Mark'];
var x;

for(x of names){t
    //console.log(x);
    document.write(x + '<br>');
}

//Looping over a String
var txt = "JavaScript"
var x;
for(x of txt){
    document.write(x + "<br>");
}

//do/while
//let j = 0;
//do{
 //   j =+ 1;
 //   console.log(j);
//} while (j<5);

//while
let n = 0;
let y = 0;
while (n < 3){
    n++;
    console.log[y += n];
}

//1. Try to recreate a for loop to be repeated based on the length //of an array
//1. Try to recreate a for loop to be repeated based on the length of an array
var students = ["John", "Mark", "Ana"]

for (i=0; i<students.length; i++){
    document.write(students[i] + 'br')
}