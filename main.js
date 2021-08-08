song1 = ""
song2 = ""

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music.mp3");

}

function setup(){
	canvas =  createCanvas(500, 400);
	canvas.position(500,320);

	video = createCapture(VIDEO);
	video.hide();
}
function draw(){
    image(video,0,0,500,400);
}

function play1(){
    song1.play();
}
function pause1(){
    song1.pause();
}
function play2(){
    song2.play();
}
function pause2(){
    song2.pause();
}