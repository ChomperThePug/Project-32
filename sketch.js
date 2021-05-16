const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
 getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg) 
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("https://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    var dateTime = responseJSON.currentDateTime ;
    var hour = dateTime.slice(11,13);
    
    if (hour >= 6) {
        bg = "sunrise1.png";
    }else{
        bg = "sunset12.jpg";
    }
    backgroundImg = loadImage(bg);
    console.log(hour);
}
