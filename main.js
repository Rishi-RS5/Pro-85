canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90; 
rover_x=18;
rover_y=18;
rover_width=100;
rover_height=90; 
rover_x=26;
rover_y=26;
background_image="racing.jpg";
rover_image="car1.png";
rover_image2="car2.png";
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
    rover1_imgTag=new Image();
    rover1_imgTag.onload=uploadrover1;
    rover1_imgTag.src=rover_image2;
    
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover1_imgTag,rover_x,rover_y,rover_width,rover_height);
}
function uploadrover1() {
    ctx.drawImage(rover2_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    if(keyPressed=='37')
    {
        left();
    }
    if(keyPressed=='38')
    {
         up();
    } if(keyPressed=='39')
    {
        right();
    } if(keyPressed=='40')
    {
        down();
    }


}