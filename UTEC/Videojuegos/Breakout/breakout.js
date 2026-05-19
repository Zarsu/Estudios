console.log("Breakout");

const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

// const lienzo_width = lienzo.width;  
// const lienzo_height = lienzo.height;

const { width: lienzo_width, height: lienzo_height } = lienzo;
const colores = [
    "#000000","#1D2B53","#7E2553","#008751",
    "#AB5236","#5F574F","#C2C3C7","#FFF1E8",
    "#FF004D", "#FFA300", "#FFEC27", "#00E436",
    "#29ADFF","#83769C","#FF77A8", "#FFCCAA"
];


function cls(){
    ctx.clearRect(0, 0, lienzo_width, lienzo_height);
}

function dibujarRectangulo(posX, posY, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, ancho, alto);
}

function dibujarCirculo(posX, posY, radio, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(posX, posY, radio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function dibujarTexto(texto, posX, posY, color, fontSize = 20){
    ctx.fillStyle = color;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillText(texto, posX, posY);
}

class Entidad{
    static entidades = [];
    constructor(){
        this.posX = 0;
        this.posY = 0;
        this.width = 0;
        this.height = 0;
        this.color = colores[0];
        Entidad.entidades.push(this);
    }

    update(){

    }

    draw(){
        dibujarRectangulo(this.posX, this.posY, this.width, this.height, this.color);
    }
}

class Jugador extends Entidad{
    constructor(){
        super();
        this.posX = lienzo_width / 2 - 50;
        this.posY = lienzo_height - 30;
        this.width = 100;
        this.height = 20;
        this.color = colores[10];
    }
}

function init(){
    gameLoop();
}

function update(){
    for(const entidad of Entidad.entidades){
        entidad.update();
    }
}

function draw(){
    for(const entidad of Entidad.entidades){
        entidad.draw();
    }
}

function gameLoop(){
    cls();
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

init();