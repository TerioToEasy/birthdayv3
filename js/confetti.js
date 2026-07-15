/* ==========================================
   CONFETTI.JS
========================================== */


const confettiCanvas = document.createElement("canvas");

confettiCanvas.id = "confetti-canvas";

document.body.appendChild(confettiCanvas);


const confettiCtx = confettiCanvas.getContext("2d");


let confettiPieces = [];


function resizeConfetti(){

    confettiCanvas.width = window.innerWidth;

    confettiCanvas.height = window.innerHeight;

}


resizeConfetti();


window.addEventListener(
    "resize",
    resizeConfetti
);



const confettiColors = [

    "#E8C66A",
    "#FFFFFF",
    "#FF6B9D",
    "#FFD93D",
    "#C77DFF"

];



class Confetti{


    constructor(x,y){

        this.x=x;

        this.y=y;

        this.size=Math.random()*8+4;


        this.speedY=Math.random()*6+3;


        this.speedX=(Math.random()-0.5)*8;


        this.rotation=Math.random()*360;


        this.rotationSpeed=
        (Math.random()-0.5)*15;


        this.color=
        confettiColors[
            Math.floor(
                Math.random()*confettiColors.length
            )
        ];


        this.opacity=1;

    }



    update(){

        this.y+=this.speedY;

        this.x+=this.speedX;


        this.rotation+=this.rotationSpeed;


        this.speedY+=0.08;


        this.opacity-=0.004;


    }



    draw(){


        confettiCtx.save();


        confettiCtx.translate(
            this.x,
            this.y
        );


        confettiCtx.rotate(
            this.rotation*Math.PI/180
        );


        confettiCtx.globalAlpha=
        this.opacity;


        confettiCtx.fillStyle=
        this.color;


        confettiCtx.fillRect(

            -this.size/2,

            -this.size/2,

            this.size,

            this.size*1.5

        );


        confettiCtx.restore();


    }


}



function launchConfetti(){


    confettiPieces=[];


    const centerX=
    window.innerWidth/2;


    const centerY=
    window.innerHeight/3;



    for(let i=0;i<180;i++){


        confettiPieces.push(

            new Confetti(

                centerX,

                centerY

            )

        );


    }


    animateConfetti();


}



function animateConfetti(){


    confettiCtx.clearRect(

        0,

        0,

        confettiCanvas.width,

        confettiCanvas.height

    );



    confettiPieces.forEach((piece,index)=>{


        piece.update();

        piece.draw();



        if(piece.opacity<=0){

            confettiPieces.splice(index,1);

        }


    });



    if(confettiPieces.length>0){

        requestAnimationFrame(
            animateConfetti
        );

    }


}