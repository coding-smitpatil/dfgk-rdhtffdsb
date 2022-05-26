song1="";
song2="";
song1status="";
song2status="";

function preload(){
    song1=loadSound("1.mp3");
    song2=loadSound("2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}
function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

