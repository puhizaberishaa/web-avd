//DOM


// var button1 = document.getElementById("btn1")

// button1.onclick = function(){
    // alert('hello')
// }
  
var button1 = document.querySelector('button')

 button1.onclick = function(){
    alert('hello')
}

//addEventListener
button1.addEventListener('mouseover', function(){
    alert('hover')
})

var button2 = document.getElementById("leave")
button2.onmouseleave = function(){
    alert('leave event')
}
var button3 = document.getElementById("wheel")
button3.onmousewheel = function(){
    alert('wheel event')
}
var button4 = document.getElementById('style')
var text = document.getElementById('txt')

button4.onclick = function(){
    text.style.color = "red"
    text.backgroundColor = "lightgrey"
    text.textAlign = "center"
    text.padding = "20px"
    text.fontSize = "100px"
text.style.padding ="20px"
} 

text.onmosueover = function(){
    text.style.cssText = "color:red; baclground-color: lightblue; center; fontsize:180px"
}
 var button5 = document.getElementById