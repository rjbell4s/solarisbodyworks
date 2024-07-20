function preload() { 
  TorsoColor = color('green'); 
  TorsoColorS1= color('white');
  TorsoColorS2= color('white');
  TorsoColorS3= color('white');
  LLegColor = color('purple');
  LLegColorS1 = color ('white');
  LLegColorS2 = color ('white');
  RLegColor = color('yellow');
  RLegColorS1 = color('white');
  RLegColorS2 = color('white');
  LArmColor = color('blue');
  LArmColorS1 = color('white');
  LArmColorS2 = color('white');
  RArmColor = color('red');
  RArmColorS1 = color('white');
  RArmColorS2 = color('white');
} 
function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(23);
  Torso = loadImage('Torso.png');
  TorsoSplit= loadImage('TorsoS1.png');
  TorsoStripe= loadImage('TorsoS2.png');
  TorsoChecker=loadImage('TorsoS3.png');
  RArm = loadImage('RArm.png');
  RArmStripe= loadImage('RArmS1.png');
  RArmCheck= loadImage('RArmS2.png');
  LArm = loadImage('LArm.png');
  LArmStripe= loadImage('LArmS1.png');
  LArmCheck= loadImage('LArmS2.png');
  LLeg = loadImage('LLeg.png');
  LLegStripe= loadImage('LLegS1.png');
  LLegCheck= loadImage('LLegS2.png');
  RLeg = loadImage('RLeg.png');
  RLegStripe= loadImage('RLegS1.png');
  RLegCheck= loadImage('RLegS2.png');

  
  


  TorsoSelect = createSelect();
  TorsoSelect.position (130,(windowHeight/2)-25);
  TorsoSelect.option("None");
  TorsoSelect.option("Split");
  TorsoSelect.option("Stripe");
  TorsoSelect.option("Checker");

  RArmSelect = createSelect();
  RArmSelect.position(200,(windowHeight/2)-25)
  RArmSelect.option("None");
  RArmSelect.option("Stripe");
  RArmSelect.option("Checker");

  LArmSelect = createSelect();
  LArmSelect.position(60,(windowHeight/2)-25)
  LArmSelect.option("None");
  LArmSelect.option("Stripe");
  LArmSelect.option("Checker");

  LLegSelect = createSelect();
  LLegSelect.position(75,(windowHeight/2)+135); 
  LLegSelect.option("None");
  LLegSelect.option("Stripe");
  LLegSelect.option("Checker");

  RLegSelect = createSelect();
  RLegSelect.position(165,(windowHeight/2)+135); 
  RLegSelect.option("None");
  RLegSelect.option("Stripe");
  RLegSelect.option("Checker");

 
  
 
 
  frameRate(30);
  torsoPicker = createColorPicker('green'); 
  torsoPicker.position(130,windowHeight/2); 
  torsoPicker.input(changeTorso); 

  torsoPickerS = createColorPicker('white'); 
  torsoPickerS.position(130,(windowHeight/2)+25); 
  torsoPickerS.input(changeTorsoS); 

  rarmPicker  = createColorPicker('red'); 
  rarmPicker.position(200,windowHeight/2); 
  rarmPicker.input(changeRArm); 

  rarmPickerS  = createColorPicker('white'); 
  rarmPickerS.position(200,(windowHeight/2)+25); 
  rarmPickerS.input(changeRArmS); 

  larmPicker  = createColorPicker('blue'); 
  larmPicker.position(60,windowHeight/2); 
  larmPicker.input(changeLArm);

  larmPickerS  = createColorPicker('white'); 
  larmPickerS.position(60,(windowHeight/2)+25); 
  larmPickerS.input(changeLArmS);

  llegPicker  = createColorPicker('purple'); 
  llegPicker.position(105,(windowHeight/2)+80); 
  llegPicker.input(changeLLeg);

  llegPickerS  = createColorPicker('white'); 
  llegPickerS.position(105,(windowHeight/2)+105); 
  llegPickerS.input(changeLLegS);

  rlegPicker  = createColorPicker('yellow'); 
  rlegPicker.position(155,(windowHeight/2)+80); 
  rlegPicker.input(changeRLeg);
 
  rlegPickerS  = createColorPicker('white'); 
  rlegPickerS.position(155,(windowHeight/2)+105); 
  rlegPickerS.input(changeRLegS);

  LyranButton=createButton("Lyran Commonwealth");
  LyranButton.position(40,40);

  DraconisButton=createButton("DraconisCombine");
  DraconisButton.position(40,75);
  
}

function draw() {
  resizeCanvas(windowWidth,windowHeight);
  background(128,127,128);
  fill(255,255,255);
  textFont('Georgia')
  text("Solaris Bodyworks",30,30);
  LyranButton.mouseClicked(LyranCommon);
  DraconisButton.mouseClicked(DraconisCombine);
  
  
  
  i = 0;
  if(i<255){
    i++;
  }else{
    i=0;
  }
  
  tint(TorsoColor);
  image(Torso,((windowWidth)/2)-128,128,200,278);

  
  switch(String(TorsoSelect.value())){
    case "Split":TorsoColorS1.setAlpha(255);
                 TorsoColorS2.setAlpha(0);
                 TorsoColorS3.setAlpha(0);
    break;
    case "Stripe":TorsoColorS1.setAlpha(0);
                  TorsoColorS2.setAlpha(255);
                  TorsoColorS3.setAlpha(0);
    break;
    case "Checker":TorsoColorS1.setAlpha(0);
                 TorsoColorS2.setAlpha(0);
                 TorsoColorS3.setAlpha(255);
    break;

    default:TorsoColorS1.setAlpha(0);
    TorsoColorS2.setAlpha(0);
    TorsoColorS3.setAlpha(0);
    break;

  }


  tint(TorsoColorS1);
  image(TorsoSplit,((windowWidth)/2)-128,128,200,278);
  
  tint(TorsoColorS2);
  image(TorsoStripe,((windowWidth)/2)-128,128,200,278);
  
  tint(TorsoColorS3);
  image(TorsoChecker,((windowWidth)/2)-128,128,200,278);
  
  

  tint(RArmColor);
  image(RArm,(windowWidth/2)+80,128,86,200);

  switch(String(RArmSelect.value())){
    case "Stripe": RArmColorS1.setAlpha(255);
                   RArmColorS2.setAlpha(0);
    break;
    case "Checker": RArmColorS1.setAlpha(0);
                   RArmColorS2.setAlpha(255);
    break;
    default:RArmColorS1.setAlpha(0);
    RArmColorS2.setAlpha(0);
break;

  }
tint( RArmColorS1);
image(RArmStripe,(windowWidth/2)+80,128,86,200);
tint( RArmColorS2);
image(RArmCheck,(windowWidth/2)+80,128,86,200);



  tint(LArmColor);
  image(LArm,(windowWidth/2)-223,128,86,200);

  switch(String(LArmSelect.value())){
    case "Stripe": LArmColorS1.setAlpha(255);
                   LArmColorS2.setAlpha(0);
    break;
    case "Checker": LArmColorS1.setAlpha(0);
                   LArmColorS2.setAlpha(255);
    break;
    default:LArmColorS1.setAlpha(0);
    LArmColorS2.setAlpha(0);
break;

  }
tint( LArmColorS1);
image(LArmStripe,(windowWidth/2)-223,128,86,200);
tint( LArmColorS2);
image(LArmCheck,(windowWidth/2)-223,128,86,200);


  tint(LLegColor);
  image(LLeg,(windowWidth/2)-155,350,86,260);
  
 switch(String(LLegSelect.value())){
  case "Stripe": LLegColorS1.setAlpha(255);
                   LLegColorS2.setAlpha(0);
    break;
    case "Checker": LLegColorS1.setAlpha(0);
                   LLegColorS2.setAlpha(255);
    break;
    default:LLegColorS1.setAlpha(0);
    LLegColorS2.setAlpha(0);
 }
tint (LLegColorS1);
image(LLegStripe,(windowWidth/2)-155,350,86,260);
tint (LLegColorS2);
image(LLegCheck,(windowWidth/2)-155,350,86,260);



 

  tint(RLegColor);
  image(RLeg,(windowWidth/2)+13,350,86,260);

  
  switch(String(RLegSelect.value())){
    case "Stripe": RLegColorS1.setAlpha(255);
                     RLegColorS2.setAlpha(0);
      break;
      case "Checker": RLegColorS1.setAlpha(0);
                     RLegColorS2.setAlpha(255);
      break;
      default:RLegColorS1.setAlpha(0);
      RLegColorS2.setAlpha(0);
   }
  tint (RLegColorS1);
  image(RLegStripe,(windowWidth/2)+13,350,86,260);
  tint (RLegColorS2);
  image(RLegCheck,(windowWidth/2)+13,350,86,260);
  
  
  


  
 
}

function changeTorso() { 
  // Update the current tint color 
  TorsoColor = torsoPicker.color(); 
} 
function changeTorsoS() { 
  // Update the current tint color 
  TorsoColorS1 = torsoPickerS.color(); 
  TorsoColorS2 = torsoPickerS.color(); 
  TorsoColorS3 = torsoPickerS.color(); 
} 
function changeRArm() { 
  // Update the current tint color 
  RArmColor = rarmPicker.color(); 
} 
function changeRArmS() { 
  // Update the current tint color 
  RArmColorS1 = rarmPickerS.color();
  RArmColorS2 = rarmPickerS.color(); 
} 
function changeLArm() { 
  // Update the current tint color 
  LArmColor = larmPicker.color(); 
} 
function changeLArmS() { 
  // Update the current tint color 
  LArmColorS1 = larmPickerS.color(); 
  LArmColorS2 = larmPickerS.color(); 
} 
function changeLLeg() { 
  // Update the current tint color 
  LLegColor = llegPicker.color();
} 
function changeLLegS() { 
  // Update the current tint color 
  LLegColorS1 = llegPickerS.color();
  LLegColorS2 = llegPickerS.color();
} 
function changeRLeg() { 
  // Update the current tint color 
  RLegColor = rlegPicker.color();
} 
function changeRLegS() { 
  // Update the current tint color 
  RLegColorS1 = rlegPickerS.color();
  RLegColorS2 = rlegPickerS.color();
} 
function LyranCommon(){
//Sets color scheme to Lyran Commonwealth
TorsoColor=color('blue');
TorsoSelect.selected("Stripe");
TorsoColorS1=color('white');
TorsoColorS2=color('white');
TorsoColorS3=color('white');
LLegColor=color('blue');
LLegColorS1=color('white');
LLegColorS1=color('white');
LLegSelect.selected("None");
RLegColor=color('blue');
RLegColorS1=color('white');
RLegColorS1=color('white');
RLegSelect.selected("None");
LArmColor=color('blue');
LArmColorS1=color('white');
LArmColorS1=color('white');
LArmSelect.selected("None");
RArmColor=color('blue');
RArmColorS1=color('white');
RArmColorS1=color('white');
RArmSelect.selected("None");
}
function DraconisCombine(){
  TorsoColor=color('red');
  TorsoSelect.selected("None");
  LLegColor=color('black');
  LLegSelect.selected("None");
  RLegColor=color('black');
  RLegSelect.selected("None");
  LArmColor=color('black');
  LArmSelect.selected("None");
  RArmColor=color('black');
  RArmSelect.selected("None");


}



