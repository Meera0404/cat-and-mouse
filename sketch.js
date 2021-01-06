var tom,tomImage;
var jerry,jerryImage;
var backg,backgImage;



function preload() {
    //load the images here

    tomImage = loadAnimation("tomOne.png","tomTwo.png",
    "tomThree.png","tomFour.png");

    jerryImage = loadAnimation("jerryOne.png","jerryTwo.png",
    "jerryThree.png","jerryFour.png");

    backgImage= loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(200,200,10,10);
    tom.addAnimation("t",tomImage);
    tom.scale = 1;

    jerry = createSprite(200,250,10,10);
    jerry.addAnimation("j",jerryImage);
    jerry.scale = 1;

    backg = createSprite(200,250,100,100);
    backg.addImage("b",backgImage);
    backg.scale = 1;

    
 
    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

