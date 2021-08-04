var iceStupa,iceStupaImg;
var cone1,cone1Img;
var cone2,cone2Img;
var cone3,cone3Img;
var bg;
var mode ;
var gameState = "noShow"
var title1;
var title2;
var reset;
var tapeDiagram,tapeDiagramImg

function preload(){
  iceStupaImg=loadImage('images/1fr.png')
  bg = loadImage('images/iceStupa2.png')
  cone1Img = loadImage('images/cone1.png')
  cone3Img = loadImage('images/cone3.png')
}

function setup(){
  mode = 0;
  createCanvas(2000,1200)
  iceStupa = createSprite(600,600,100,400)
  iceStupa.visible =  false;
  cone1 = createSprite(600,600,100,100)
  cone1.addImage('c1',cone1Img)
  cone1.scale = 2;
  cone3 = createSprite(1200,550,100,100);
  cone3.addImage('c3', cone3Img);
  cone3.scale = 2
  input1 = createInput("").attribute("placeholder", "Enter height of pipe");
  input1.position(500, 700);
  input1.size(150, 30);
  input2 = createInput("").attribute("placeholder", "Enter height of pipe");
  input2.position(1000,750);
  input2.size(150, 30);

  input3 = createInput("").attribute("placeholder", "     10 ");
  input3.position(700,800);
  input3.size(50,50)

  input4 = createInput("").attribute("placeholder", "      ?")
  input4.position(820,800);
  input4.size(50,50)

  input5 = createInput("").attribute("placeholder", "       60 ")
  input5.position(920,800);
  input5.size(50,50)
  check = createButton("CHECK");
  check.position(1000, 800);

  reset = createButton("TRY AGAIN");
  reset.position(500,400);
  reset.hide()
  title1 = createElement('h2')
  title1.html("Let's adjust the height of the sprinkler to form the ice stupa");
  title1.position(500, 100);

  title2 = createElement('h4')
  title2.html(" Equation");
  title2.position(600, 800);

  title3 = createElement('h4')
  title3.html(" OOPS TRY AGAIN!!!");
  title3.position(500, 500);
  title3.hide()

}

function draw(){
   
    background("pink");
    textSize(40)
    fill('black')
    text(" + ",770,835)
    text(" = ", 880,835)
    answer = input4.value()
   
    check.mousePressed(answerCheck)

    reset.mousePressed(startOver)
   
   
    if(gameState== 'show'){
      background(bg)
      fill("white")
     text('Awesome!! you have adjusted the sprinkler and created the Ice Stupa using the Tape Diagram ', 100,170)
      //clear()
      
      input1.hide()
      input2.hide()
      input3.hide()
      input4.hide()
      input5.hide()
      title1.hide()
      title2.hide()
      check.hide()
      cone1.visble = false;
      cone2.visible=false;
      text.hide()
      display() 
      
    }

     if(gameState == 'end'){
      reset.show()
      title3.show()
       
    }

    if(gameState== 'start'){
      reset.hide()
      title3.hide()
      
      
    

    }
  
  drawSprites()
  
}
function answerCheck(){
if(answer == 50 ){
gameState = 'show'
}
else if(answer !== 50){
  gameState = 'end'
  
}
}

function startOver(){
gameState = 'start'
}


