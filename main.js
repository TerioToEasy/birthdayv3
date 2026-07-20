/* =======================================================
PRIVATE BIRTHDAY EXPERIENCE

MAIN.JS

======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initCursorGlow();

    initParticles();

    initVerification();

});



/* =======================================================
LOADER
======================================================= */

function initLoader(){

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.style.animation = "loaderDisappear .8s forwards";

        setTimeout(()=>{

            loader.remove();

        },800);

    },4000);

}



/* =======================================================
CURSOR GLOW
======================================================= */

function initCursorGlow(){

    const glow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove",(e)=>{

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

}



/* =======================================================
PARTICLES
======================================================= */

function initParticles(){

    const container = document.getElementById("particles");

    for(let i=0;i<55;i++){

        const particle = document.createElement("span");

        particle.className="particle";

        particle.style.left=Math.random()*100+"%";

        particle.style.animationDuration=(10+Math.random()*15)+"s";

        particle.style.animationDelay=Math.random()*15+"s";

        particle.style.opacity=Math.random()*.5;

        particle.style.transform="scale("+(Math.random()*1.8+.3)+")";

        container.appendChild(particle);

    }

}



/* =======================================================
VERIFICATION
======================================================= */

function initVerification(){

    const verifyButton = document.getElementById("verifyButton");

    const verification = document.getElementById("verification");

    const puzzle = document.getElementById("puzzle-screen");

    const mainContent = document.getElementById("main-content");

    const hero = document.querySelector(".hero");

  verifyButton.addEventListener("click",()=>{


    verification.classList.add("hidden");


    mainContent.classList.remove("hidden");


    startMusic();


    launchConfetti();

setTimeout(()=>{

    hero.classList.add("active");

},500);


});

}
initMemoryAnimation();
function initMemoryAnimation(){


const cards=document.querySelectorAll(".memory-card");



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{


threshold:.2


});



cards.forEach(card=>{


observer.observe(card);


});


}