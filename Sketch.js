var cowIdle, pigIdle, chickenIdgle;
var cowMove, pigMove, chickenMove;
var chicken, pig, cow;
var coins;
var buyCow, buyPig, BuyChicken;
var buttonImage;
var numOfAnimals;
function preload() {
    chickenIdgle = loadImage("./Assets/Chicken/tile004.png");
    chickenMove = loadAnimation("./Assets/Chicken/tile004.png", "./Assets/Chicken/tile006.png", "./Assets/Chicken/tile007.png", "./Assets/Chicken/tile008.png", "./Assets/Chicken/tile009.png", "./Assets/Chicken/tile010.png");

    pigIdle = loadImage("./Assets/Pigs/tile002.png");
    pigMove = loadAnimation("./Assets/Pigs/tile000.png", "./Assets/Pigs/tile001.png", "./Assets/Pigs/tile003.png", "./Assets/Pigs/tile004.png", "./Assets/Pigs/tile005.png");

    cowIdle = loadImage("./Assets/Cow/tile008.png");
    cowMove = loadAnimation("./Assets/Cow/tile000.png", "./Assets/Cow/tile001.png", "./Assets/Cow/tile003.png", "./Assets/Cow/tile016.png", "./Assets/Cow/tile008.png");

    buttonImage = loadImage("./Assets/Button.jpg")
}

function setup() {
    createCanvas(1000, 900);

    buyCow = createSprite(400, 100);
    buyCow.scale = 0.1;
    buyCow.addImage("buyCow", buttonImage);

    buyPig = createSprite(550, 100);
    buyPig.scale = 0.1;
    buyPig.addImage("buyPig", buttonImage);

    BuyChicken = createSprite(760, 100);
    BuyChicken.scale = 0.1;
    BuyChicken.addImage("buyChicken", buttonImage);

    coins = 0;
}

function draw() {
    background("green");

    fill("blue");
    textSize(30);
    text("Coins: " + coins, 70, 100);
    
    fill("red");
    text("BUY COWS    BUY PIGS    BUY CHICKENS",300,50);

    if(frameCount%60===0){
       coins+ 2*numOfAnimals;
    }

    drawSprites();
}

function CreateCows() {
    cow = createSprite(random(600, 900), random(200, 500));
    cow.scale = 1.3;
    cow.addImage("cowIdle", cowIdle);
    //cow.addAnimation("cowMove",cowMove);
    numOfAnimals +1;
}

function CreatePigs() {
    pig = createSprite(random(300, 600), random(600, 700));
    pig.scale = 1;
    pig.addImage("pigIdle", pigIdle);
    //pig.addAnimation("pigMove",pigMove);
    numOfAnimals +1;
}

function CreateChickens() {
    chicken = createSprite(random(50, 300), random(200, 500));
    chicken.scale = 1;
    chicken.addImage("chickenIdle", chickenIdgle);
    //chicken.addAnimation("chickenMove",chickenMove);
    numOfAnimals +1;
}

function mousePressed(){
    console.log("a");
}