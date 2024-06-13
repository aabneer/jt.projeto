let palavra;

function setup() {
createCanvas(400, 400);
palavra=aleatorio();
}

function aleatorio(){
let palavras=["especial","anormal","diferente","esquisito"];
return random(palavras);
}

function cores(){
background(0,0,120);
fill(220,150,0);
}

function texto(){
textSize(64);
textAlign(CENTER,CENTER);
}

function draw() {
cores();
texto();

parsial=palavraParsial(-20,width-50);
text(parsial,200,200)
}  

function palavraParsial(minimo,maximo){
let quantidade=map(mouseX,minimo,maximo,0,palavra.length);
let parsial=palavra.substring(0,quantidade);
return parsial
}