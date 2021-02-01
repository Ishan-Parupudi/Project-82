var mouseEvent ="empty";
var last_position_of_x;
var last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="black";
var width_of_the_line=1;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_the_line=document.getElementById("width_of_the_line").value;
    radius=document.getElementById(radius).value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_position_of_mouse_X= e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_Y= e.clientY - canvas.offsetTop;
    
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_the_line;
        ctx.arc=(current_position_of_mouse_X, current_position_of_mouse_Y, radius, 0, 2*Math.PI);

        console.log("last position of x and y coordinates are");
        console.log("x=" + last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y coordinates are");
        console.log("x=" + current_position_of_mouse_X + "y=" + current_position_of_mouse_Y);
        ctx.moveTo(current_position_of_mouse_X, current_position_of_mouse_Y); 
    }
    last_position_of_x=current_position_of_mouse_X;
    last_position_of_y=current_position_of_mouse_Y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";  
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";  
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}