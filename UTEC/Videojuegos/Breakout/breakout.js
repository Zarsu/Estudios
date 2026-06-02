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

function dibujarRectanguloSinRelleno(posX, posY, ancho, alto,color = colores[0], grosor = 2){
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    
    ctx.strokeRect(posX, posY, ancho, alto);
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

class Controller{
    static instance;

    static rightArrow = false;
    static leftArrow = false;
    static enter = false;
    static esc = false;

    constructor(){
        window.addEventListener("keydown", Controller.manageControl);
        window.addEventListener("keyup", Controller.manageControl);
    }

    static getInstance(){
        if(Controller.instance) return Controller.instance;
        Controller.instance = new Controller();
        return Controller.instance;
    }

    static manageControl(event){
        switch(event.code){
            case "ArrowRight":
                Controller.rightArrow = event.type === "keydown";
                break;
            case "ArrowLeft":
                Controller.leftArrow = event.type === "keydown";
                break;
            case "Enter":
                Controller.enter = event.type === "keydown";
                break;
            case "Escape":
                Controller.esc = event.type === "keydown";
                break;
        }
    }
}

class Entidad{
    static entidades = [];
    #width = 50
    #height = 50
    #color = colores[8]
    constructor(posX = 0, posY = 0){
        this.posX = posX;
        this.posY = posY;

        this.velocidad = 0;
        this.direccionX = 0;
        this.direccionY = 0;

        this.debug = false;
        this.bbox = { 
            x: this.posX, 
            y: this.posY, 
            width: this.width, 
            height: this.height,
            color: colores[11]
        };
        Entidad.entidades.push(this);
    }

    set width(value){
        this.#width = value;
    }

    get width(){
        return this.#width;
    }

    set height(value){
        this.#height = value;
    }

    get height(){
        return this.#height;
    }

    update(){
        this.posX += this.velocidad * this.direccionX;
        this.posY += this.velocidad * this.direccionY;
    }

    draw(){
        if(this.debug){
            dibujarRectanguloSinRelleno(this.posX, this.posY, this.width, this.height, this.bbox.color, 2);
        }
    }

    delete(){
        const index = Entidad.entidades.indexOf(this);
        if(index > -1){
            Entidad.entidades.splice(index, 1);
        }
    }

    onCollision(otherEntidad){

    }
}

class Jugador extends Entidad{
    constructor(){
        super();
        this.velocidad = 2.5;
        this.width = 100;
        this.height = 20;
        this.posX = lienzo_width / 2 - this.width / 2;
        this.posY = lienzo_height - this.height - lienzo_height * 0.05;
        this.color = colores[8];
    }

    update(){
        super.update();    
        if(Controller.rightArrow && this.posX + this.width < lienzo_width){
            this.posX += this.velocidad;
        }
        if(Controller.leftArrow && this.posX > 0){
            this.posX -= this.velocidad;
        }
    }

    draw(){
        super.draw();
        dibujarRectangulo(this.posX, this.posY, this.width, this.height, this.color);
    }
}

class Ladrillo extends Entidad{
    constructor(posX, posY, color = colores[9]){
        super();
        this.posX = posX;
        this.posY = posY;
        this.width = 50;
        this.height = 20;
        this.color = color;
    }

    draw(){
        super.draw();
        dibujarRectangulo(this.posX, this.posY, this.width, this.height, this.color);
        dibujarRectanguloSinRelleno(this.posX, this.posY, this.width, this.height, colores[7], 2);
    }

    onCollision(otherEntidad){
        this.delete();
    }
}

class Pelota extends Entidad{
    #radio;

    constructor(radio = 10){
        super();
        
        this.radio = radio;
        this.posX = lienzo_width / 2 - this.width / 2;
        this.posY = lienzo_height / 2 - this.height / 2;

        this.velocidad = 2;
        this.direccionX = Math.random() < 0.5 ? -1 : 1;
        this.direccionY = Math.random() < 0.5 ? -1 : 1;
        this.color = colores[9];

        console.log(this);
    }

    set radio(value){
        this.#radio = value;
        super.width = value * 2;
        super.height = value * 2;
    }

    get radio(){
        return this.#radio;
    }

    set width(value){
        this.#radio = value / 2;
        super.width = value;
        super.height = value;
    }

    get width(){
        return super.width;
    }

    set height(value){
        this.#radio = value / 2;
        super.width = value;
        super.height = value;
    }

    get height(){
        return super.height;
    }

    
    draw(){
        super.draw();
        dibujarCirculo(this.posX + this.radio, this.posY + this.radio, this.radio, this.color);
    }

    update(){
        if(this.posX + this.width >= lienzo_width){
            this.direccionX *= -1;
            this.posX -= 1 * this.velocidad;
        }
        if(this.posX <= 0){
            this.direccionX *= -1;
            this.posX += 1 * this.velocidad;
        }
        if(this.posY <= 0){
            this.direccionY *= -1;
            this.posY += 1 * this.velocidad;
        }
        if(this.posY + this.height >= lienzo_height){
            this.direccionY *= -1;
            // this.posX = lienzo_width / 2 - this.width / 2;
            // this.posY = lienzo_height / 2 - this.height / 2;
            // window.alert("¡Has perdido!");
            // window.location.reload();
        }
        super.update();

        for(const entidad of Entidad.entidades){
            if(entidad === this) continue;

            if(entidad instanceof Jugador && colision(this, entidad)){
                const lado = getCollisionSide(this, entidad);

                if (lado === "TOP" || lado === "BOTTOM") {
                    this.direccionY *= -1;
                    if(lado === "TOP"){
                        this.posY += 1 * Math.abs(this.velocidad);
                    }else{
                        this.posY -= 1 * Math.abs(this.velocidad);
                    }
                } else {
                    this.direccionX *= -1;
                    if(lado === "LEFT"){
                        this.posX += 1 * Math.abs(this.velocidad);
                    }else{
                        this.posX -= 1 * Math.abs(this.velocidad);
                    }
                }
            }

            if(entidad instanceof Ladrillo && colision(this, entidad)){
                const lado = getCollisionSide(this, entidad);

                if (lado === "TOP" || lado === "BOTTOM") {
                    this.direccionY *= -1;
                    if(lado === "TOP"){
                        this.posY += 1 * Math.abs(this.velocidad);
                    }else{
                        this.posY -= 1 * Math.abs(this.velocidad);
                    }
                } else {
                    this.direccionX *= -1;
                    if(lado === "LEFT"){
                        this.posX += 1 * Math.abs(this.velocidad);
                    }else{
                        this.posX -= 1 * Math.abs(this.velocidad);
                    }
                }
                

                entidad.onCollision(this);
            }
        }
    }
}

function init(){
    Controller.getInstance();

    j = initializePlayer();
    p = initializeBall();
    
    brickGrids = initializeBricks();

    gameLoop();
}

function update(){
    for(const entidad of Entidad.entidades){
        entidad.update();
    }
}

function draw(){
    cls();
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

function initializePlayer(){
    j = new Jugador();
    return j;
}

function initializeBall(){
    p = new Pelota();
    return p;
}

function initializeBricks(){
    rows = 7;
    columns = 10;
    gapLadrillo = 10;
    paddingLadrillo = 20;

    widthGrilla = (lienzo_width - gapLadrillo * (columns - 1) - (paddingLadrillo * 2)) / columns;
    heightRow = 20;

    for(let j = 0; j < rows; j++){
        for(let i = 0; i < columns; i++){
            const l = new Ladrillo();
            l.width = widthGrilla;
            l.height = heightRow;
            l.posX = i * (gapLadrillo + widthGrilla) + paddingLadrillo;
            l.posY = paddingLadrillo + j * (gapLadrillo + heightRow);
            l.color = colores[j == 0 ? 8 : j + 9];
        }   
    }
}

function colision(entidadA, entidadB){
    return (
        entidadA.posX < entidadB.posX + entidadB.width &&
        entidadA.posX + entidadA.width > entidadB.posX &&
        entidadA.posY < entidadB.posY + entidadB.height &&
        entidadA.posY + entidadA.height > entidadB.posY
    );
}

function getCollisionSide(entidadA, entidadB) {
    const dx = (entidadA.posX + entidadA.width / 2) - (entidadB.posX + entidadB.width / 2);
    const dy = (entidadA.posY + entidadA.height / 2) - (entidadB.posY + entidadB.height / 2);

    const combinedHalfWidths = (entidadA.width + entidadB.width) / 2;
    const combinedHalfHeights = (entidadA.height + entidadB.height) / 2;

    const overlapX = combinedHalfWidths - Math.abs(dx);
    const overlapY = combinedHalfHeights - Math.abs(dy);

    if (overlapX < overlapY) {
        return dx > 0 ? "LEFT" : "RIGHT";
    } else {
        return dy > 0 ? "TOP" : "BOTTOM";
    }
}

init();
