/* ==========================================
   MUSIC.JS
========================================== */

const music = document.getElementById("music");
const vinyl = document.querySelector(".vinyl");

let musicStarted = false;

// Anfangslautstärke
music.volume = 0;

// Musik starten
function startMusic(){

    if(musicStarted) return;

    musicStarted = true;

    music.play().catch(err => {
        console.log(err);
    });

    // Vinyl drehen
    vinyl.style.animationPlayState = "running";

    // Lautstärke langsam erhöhen
    let volume = 0;

    const fade = setInterval(()=>{

        volume += 0.02;

        if(volume >= 0.35){

            volume = 0.35;

            clearInterval(fade);

        }

        music.volume = volume;

    },120);

}

// Musik pausieren / fortsetzen
vinyl.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        vinyl.style.animationPlayState = "running";

document
.querySelector(".tone-arm")
.classList.add("playing");

    }

    else{

        music.pause();

        vinyl.style.animationPlayState="paused";

    }

});