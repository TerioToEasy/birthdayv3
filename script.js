const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let pieces = [];

function resize(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const colors=[
"#FFD93D",
"#6BCB77",
"#4D96FF",
"#FF6B6B",
"#FFFFFF",
"#C77DFF"
];

class Confetti{

constructor(){

this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height-canvas.height;

this.size=Math.random()*8+4;

this.speed=Math.random()*3+2;

this.angle=Math.random()*360;

this.rotation=Math.random()*10;

this.color=colors[Math.floor(Math.random()*colors.length)];

}

update(){

this.y+=this.speed;

this.angle+=this.rotation;

if(this.y>canvas.height+20){

this.y=-20;
this.x=Math.random()*canvas.width;

}

}

draw(){

ctx.save();

ctx.translate(this.x,this.y);

ctx.rotate(this.angle*Math.PI/180);

ctx.fillStyle=this.color;

ctx.fillRect(-this.size/2,-this.size/2,this.size,this.size*1.4);

ctx.restore();

}

}

for(let i=0;i<250;i++){

pieces.push(new Confetti());

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{

p.update();

p.draw();

});

requestAnimationFrame(animate);

}

animate();

document.getElementById("celebrate").addEventListener("click",()=>{

for(let i=0;i<120;i++){

pieces.push(new Confetti());

}

});