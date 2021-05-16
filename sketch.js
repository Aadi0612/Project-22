var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){

    music = loadSound("music.mp3") 
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30)
    block3.shapeColor = "red";

    block4 = createSprite(730,580,200,30)
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.velocityx = -4
    ball.velocityy = 4 
    
    
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        ball.velocityx = -3
        ball.velocityy = 1
    
    }



    if(ball.isTouching(block2) && ball.bounceOff(block2)) {
        ball.shapeColor = "orange";
       ball.velocityx = -3
       ball.velocityy = 2
        
    }

    if(ball.isTouching(block3) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
        ball.velocityx = 2
        ball.velocityy = -3
    }

    if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
        ball.velocityx = -3
        ball.velocityy = 3
    }


    drawSprites();

    }
