var bg;
var ropeImg,rope45Img,iceStupaImg
var iceStupa 
var rope_clicked_times 
var rope;
var rope1,rope2,rope3,rope4,rope5;


function preload() {
    bg = loadImage('sprites/source.png') 
    ropeImg = loadImage('sprites/ropefinal.png')
    rope45Img = loadImage('sprites/45r.png')
    iceStupaImg = loadImage('sprites/ice.png')
 }


function setup(){
    createCanvas(1200,600);

iceStupa = createSprite(105,305,10,10);
iceStupa.addImage("a",iceStupaImg)
iceStupa.scale = 3
rope_clicked_times = 0
rope = createSprite(100,50,50,50)
rope.addImage('b',ropeImg)
rope.scale = 0.5
rope1 = createSprite(910,120,10,10)
rope1.visible = false
rope1.addImage(rope45Img)
rope1.scale = 0.5
rope2 = createSprite(859,172,10,10)
rope2.visible = false
rope2.addImage(rope45Img)
rope2.scale = 0.5
rope3 = createSprite(768,258,10,10)
rope3.visible = false
rope3.addImage(rope45Img)
rope3.scale = 0.5
 rope4 = createSprite(680,341,10,10)
rope4.visible = false
rope4.addImage(rope45Img)
rope4.scale = 0.5
rope5 = createSprite(550,391,10,10)
rope5.visible = false
rope5.addImage(ropeImg)
rope5.scale = 0.5
rope6 = createSprite(415,390,10,10)
rope6.visible = false
rope6.addImage(ropeImg)
rope6.scale = 0.5   
rope7 = createSprite(280,390,10,10)
rope7.visible = false
rope7.addImage(ropeImg)
rope7.scale = 0.5       
}

function draw() {
    background(bg)
    if(mousePressedOver(rope)){
      rope_clicked_times += 1;
      click(rope_clicked_times)
    }
  
    drawSprites()
    text("X " + World.mouseX + "Y " + World.mouseY, World.mouseX,World.mouseY);
    textSize(20)
    text("click on the rope", 49,87)
    text("rope length 10 units",38,30)
   
    
  
  }
  
  function click(x){
    
    if(x==1){
      rope1.visible = true
    }
    if(x==2){
      rope2.visible = true
    }
    
    if(x==3){
      rope3.visible = true
    }
    
     if(x==4){
      rope4.visible = true
    }
    
    if(x==5){
      rope5.visible = true
    }
    
    if(x==6){
      rope6.visible = true
    }
    if(x==7){
      rope7.visible = true
    }
     
  }
