//function printNames(){
   // document.write('John');
   // document.write('<br>')
   // setTimeout(function(){document.write(Ana); }, 3000);
//}

//printNames{};

var colors = ['red', 'green', 'blue', 'purple'];

function changeBgColor(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];
}

changeBgColor();

var names = ['John', 'Ana', 'Bob', 'Mark'];

function changeNames(){
    document.querySelection('p').innerHTML = names[Math.random()*names.length];

}
changeNames();

setInterval(changeBgColor, 1000);
setInterval(changeNames, 1000);