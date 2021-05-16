var tom, jerry
var bgImg

function preload() {
    bgImg = loadImage("images/garden.png")
    tomImg1 = loadAnimation("images/cat1.png")
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    tomImg3 = loadAnimation("images/cat4.png")

    jerryImg1 = loadAnimation("images/mouse1.png")
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600);
    tom.addAnimation("tomsleeping", tomImg1)
    tom.scale = 0.3;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerrystanding", jerryImg1)
    jerry.scale = 0.3;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width-jerry.width)/2) {
        tom.velocityX = 0;
        jerry.velocityX = 0;
        tom.addAnimation("tomLastImg", tomImg3);
        tom.x=300
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImg", tomImg3);

        jerry.addAnimation("jerryLastImg", jerryImg3)
        jerry.scale = 0.5;
        jerry.changeAnimation("jerryLastImg", jerryImg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        tom.velocityX = -5
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning", tomImg2)

        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.changeAnimation("jerryteasing", jerryImg2);
        jerry.frameDelay = 25
    }

}
