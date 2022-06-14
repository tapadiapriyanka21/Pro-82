var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
color="black";
width= 3;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value
    width=document.getElementById("width").value
    radius=document.getElementById("radius").value
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  current_position_of_X = e.clientX - canvas.offsetLeft;
  current_position_of_Y = e.clientY - canvas.offsetTop;
  if (mouseEvent== "mouseDown"){
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = width
      ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 ,2*Math.PI );
      ctx.moveTo(last_position_of_x,last_position_of_y)
      ctx.lineTo(current_position_of_X,current_position_of_Y)
      ctx.stroke()
  }
  last_position_of_x = current_position_of_X
  last_position_of_y = current_position_of_Y
}

function clearCanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}