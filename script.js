//Ejemplo de canvas
/* let canvasElement = document.getElementById("My-Canvas");
let canvasContext = canvasElement.getContext("2d");// se carga el plano

canvasContext.beginPath();

canvasContext.lineWidth = 10;
canvasContext.strokeStyle = 'blue';
canvasContext.strokeRect(10, 10, 70,70);
canvasContext.fillStyle = 'red';
canvasContext.fillRect(40,30,30,35)//coordX, coordY, ancho, alto */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//Asegurar las medidas del lienzo
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image(); //propiedad para insertar una imagen
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575; // ancho/numCols
const spriteHeight = 523; //alto/numFil

//valores para cambiar de sprite
let frameX = 4;
let frameY = 2;


const animate =()=>{
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(50,50,100,100);
  ctx.drawImage(playerImage, frameX * spriteWidth , frameY * spriteHeight,spriteWidth,spriteHeight,0, 0, spriteWidth,spriteHeight);
  requestAnimationFrame(animate); //Que la imagen se repita automaticamente

};

animate();



// 10 filas y 11 columnas de frames

// ancho --> 6876

// height --> 5230

// Cada fotograma mide 573