const startBtn = document.getElementById("startBtn");

const questionBox = document.getElementById("questionBox");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const envelopeScreen = document.getElementById("envelopeScreen");

const envelope = document.getElementById("envelope");

const finalPage = document.getElementById("finalPage");

const typedText = document.getElementById("typedText");

const gardenSection = document.getElementById("gardenSection");

const heartContainer = document.getElementById("heartContainer");

const fireflies = document.getElementById("fireflies");

/* Fireflies */

for(let i=0;i<15;i++){

  const f=document.createElement("div");

  f.className="firefly";

  f.style.left=Math.random()*100+"vw";

  f.style.top=Math.random()*100+"vh";

  f.style.animationDuration=(Math.random()*5+5)+"s";

  fireflies.appendChild(f);

}

/* Flower Bloom */

function bloom(f){

  f.classList.toggle("bloom");

}

/* Start Question */

startBtn.onclick=()=>{

  questionBox.classList.remove("hidden");

};

/* Yes Click */

yesBtn.onclick=()=>{

  questionBox.classList.add("hidden");

  gardenSection.style.display="none";

  envelopeScreen.classList.remove("hidden");

};

/* No Button Escape */

noBtn.onmouseover=()=>{

  yesBtn.style.position="absolute";

  yesBtn.style.left=Math.random()*300+"px";

  yesBtn.style.top=Math.random()*200+"px";

};

/* Envelope Open */

envelope.onclick=()=>{

  envelope.classList.add("open");

  setTimeout(()=>{

    envelopeScreen.classList.add("hidden");

    finalPage.classList.remove("hidden");

    startTyping();

    startHeartRain();

  },1200);

};

/* Typing Message */

const lines=[

"You are very important to me.",

"I made this whole thing just for you.",

"I hope this makes you smile.",

"Its my promise that i will obey u from now..."

];

function startTyping(){

  let l=0,c=0;

  function type(){

    if(l<lines.length){

      if(c<lines[l].length){

        typedText.innerHTML+=lines[l][c];

        c++;

        setTimeout(type,40);

      }else{

        typedText.innerHTML+="<br><br>";

        l++; c=0;

        setTimeout(type,600);

      }

    }

  }

  type();

}

/* Heart Rain */

function startHeartRain(){

  setInterval(()=>{

    const h=document.createElement("div");

    h.className="heart";

    h.innerHTML="❤";

    h.style.left=Math.random()*100+"vw";

    h.style.fontSize=(Math.random()*20+15)+"px";

    h.style.animationDuration=(Math.random()*3+2)+"s";

    heartContainer.appendChild(h);

    setTimeout(()=>h.remove(),5000);

  },300);

}