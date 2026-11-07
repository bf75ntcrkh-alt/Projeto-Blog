

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//construindo o sistema de pontos
var mortes=0;
var vitorias=0;
var total=0;

//construindo o design do jogo
var linha1=createSprite(190,120,250,3);
var linha2=createSprite(190,260,250,3);
var linha3=createSprite(67,145,3,50);
var linha4=createSprite(67,235,3,50);
var linha5=createSprite(313,145,3,50);
var linha6=createSprite(313,235,3,50);
var linha7=createSprite(41,170,50,3);
var linha8=createSprite(41,210,50,3);
var linha9=createSprite(337,210,50,3);
var linha10=createSprite(337,170,50,3);
var linha11=createSprite(18,190,3,40);
var linha12=createSprite(361,190,3,40);

//construindo jogador
var jogador=createSprite(40,190,13,13);
jogador.shapeColor="green";

//fazendo inimigos
var inimigo1=createSprite(100,180,10,10);
var inimigo2=createSprite(160,170,10,10);
var inimigo3=createSprite(220,150,10,10);
var inimigo4=createSprite(280,120,10,10);
inimigo1.shapeColor="red";
inimigo2.shapeColor="red";
inimigo3.shapeColor="red";
inimigo4.shapeColor="red";
inimigo1.velocityY=randomNumber(7,8.5);
inimigo2.velocityY=randomNumber(7,8.5);
inimigo3.velocityY=randomNumber(7,8.5);
inimigo4.velocityY=randomNumber(7,8.5);
//funcao desenho
function draw(){
  background("white");
  inimigo1.bounceOff(linha2);
  inimigo1.bounceOff(linha1);
  
  inimigo2.bounceOff(linha2);
  inimigo2.bounceOff(linha1);
  
  inimigo3.bounceOff(linha2);
  inimigo3.bounceOff(linha1);
  
  inimigo4.bounceOff(linha2);
  inimigo4.bounceOff(linha1);
  //movimento player
  if(mouseDown("left")){
    jogador.velocityX=4;
  }
  else{
    jogador.velocityX*=0.7;
  }
  if(jogador.isTouching(inimigo1)){
    jogador.x=40;
    jogador.y=190;
    mortes+=1;
    total+=1;
    playSound("assets/category_alerts/retro_game_health_pickup_6.mp3", false);
    
  }
  if(jogador.isTouching(inimigo2)){
    jogador.x=40;
    jogador.y=190;
    mortes+=1;
    total+=1;
    playSound("assets/category_alerts/retro_game_health_pickup_6.mp3", false);
  }
  if(jogador.isTouching(inimigo3)){
    jogador.x=40;
    jogador.y=190;
    mortes+=1;
    total+=1;
    playSound("assets/category_alerts/retro_game_health_pickup_6.mp3", false);
  }
  if(jogador.isTouching(inimigo4)){
    jogador.x=40;
    jogador.y=190;
    mortes+=1;
    total+=1;
    playSound("assets/category_alerts/retro_game_health_pickup_6.mp3", false);
  }
  if(jogador.x>=310){
    playSound("assets/category_achievements/melodic_win_4.mp3", false);
    jogador.x=40;
    vitorias+=1;
    total+=1;
  }

  text("Mortes: "+mortes,90,90);
  text("Vitórias: "+ vitorias,90,80);
  
  if(total==0){
    text("Win rate: 0%",90,70);
  }
  else{
    text("Win rate: "+Math.round((vitorias*100/total))+"%",90,70);
  }
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
