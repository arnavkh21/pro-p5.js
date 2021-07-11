function preload(){

}
function setup(){
     
    canvas = createCanvas(700,480);
    canvas.position(110,250);
    
    video = createCapture(VIDEO);
    video.hide();

    
}
function draw(){
    image(video,200,150,300,200);
fill('cyan');
//all rect's here//
rect(23,60,35,350);
rect(60,430,600,35);
rect(645,60,35,350);
rect(23,25,660,35);
// border -------- border//
fill('gray');
//all circles here//
circle(40, 40, 70);
circle(40, 440, 70);
circle(660, 440, 70);
circle(660, 40, 70);


  
}

function take_snapshot(){
    save('framed_delete.png');
}
