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
//let frameX = 0;
//let frameY = 3; //valor a cambiar

//relantizar la animacion
let gameFrame = 0;
const staggerFrames = 4//relantizara la animacion en esa cantidad
//contenedor de animaciones:
const spriteAnimations = [];
const animationStates = [
  {
    name:"idle",
    frames:7
  },

  {
    name:"jump",
    frames:7
  },

  {
    name:"fall",
    frames:7
  },
  
  {
    name:"run",
    frames:9
  }, 

  {
    name:"dizzy",
    frames:11
  }, 

  {
    name:"sit",
    frames:5
  }, 

  {
    name:"roll",
    frames:7
  }, 

  {
    name:"bite",
    frames:7
  }, 

  {
    name:"ko",
    frames:12
  }, 

  {
    name:"getHit",
    frames:4
  }, 

]

//Mapear las ubicaciones de cada sprite:
animationStates.forEach((state,index) => {
  let frames = {
    loc:[],
  }
  for(let j = 0; j < state.frames; j++){
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ //almaceno en los las ubicaicones de cada frameX
      x: positionX,
      y: positionY
    })
  };

  spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

//Estado de animacion:
let playerState = "run";
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
  playerState = e.target.value;
})

const animate =()=>{
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(50,50,100,100);
  //forma2:
  let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; //recorrer los sprites horizontales
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(playerImage, frameX , frameY ,spriteWidth,spriteHeight,0, 0, spriteWidth,spriteHeight);

  //Controlador de cambio de sprites
  //forma 1:
  /* if(gameFrame % staggerFrames == 0){ //sera cierto cada 4 fotogramas
    if(frameX < 7 ) frameX++; // se ejecutara cada 4 fotogramas
    else frameX = 0
  } */

  gameFrame++;
  requestAnimationFrame(animate); //Que la imagen se repita automaticamente

};

animate();

//Datos importantes:

// 10 filas y 11 columnas de frames

// ancho --> 6876

// height --> 5230

// Cada fotograma mide 573