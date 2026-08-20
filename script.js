document.addEventListener("DOMContentLoaded", () => {


/* ==================================================
   MENU
================================================== */

const menuButton =
document.getElementById("menuButton");

const nav =
document.getElementById("nav");

if(menuButton){

menuButton.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

document.querySelectorAll(".nav a")
.forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});


/* ==================================================
   TEMA
================================================== */

const themeButton =
document.getElementById("themeButton");

if(themeButton){

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light");

themeButton.textContent =
document.body.classList.contains("light")
? "☾"
: "☼";

});

}


/* ==================================================
   PROGRESSO
================================================== */

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scroll =
window.scrollY;

const height =
document.documentElement.scrollHeight
- window.innerHeight;

const percent =
height > 0
? (scroll / height) * 100
: 0;

progressBar.style.width =
percent + "%";

});


/* ==================================================
   ANATOMIA
================================================== */

const anatomyData={

cornea:{
number:"01",
title:"Córnea",
text:
"A córnea é a camada transparente localizada na parte frontal do olho. Ela protege o olho e participa diretamente da refração da luz."
},

iris:{
number:"02",
title:"Íris",
text:
"A íris é a região colorida do olho. Seus músculos controlam o tamanho da pupila e, consequentemente, a quantidade de luz que entra."
},

pupil:{
number:"03",
title:"Pupila",
text:
"A pupila é a abertura localizada no centro da íris. Ela permite que a luz atravesse o olho."
},

retina:{
number:"04",
title:"Retina",
text:
"A retina contém células sensíveis à luz. Ela transforma estímulos luminosos em sinais elétricos que seguem pelo nervo óptico."
}

};

const partTitle =
document.getElementById("partTitle");

const partText =
document.getElementById("partText");

const partNumber =
document.getElementById("partNumber");

document.querySelectorAll(
".anatomy-nav button, .anatomy-point"
)
.forEach(button=>{

button.addEventListener("click",()=>{

const part =
button.dataset.part;

const data =
anatomyData[part];

if(!data) return;

partTitle.textContent =
data.title;

partText.textContent =
data.text;

partNumber.textContent =
data.number;

document.querySelectorAll(
".anatomy-nav button"
)
.forEach(btn=>{

btn.classList.toggle(
"active",
btn.dataset.part===part
);

});

});

});


/* ==================================================
   ANOMALIAS
================================================== */

const anomalyData={

miopia:{
title:"Miopia",
display:"VISÃO DE LONGE DESFOCADA",
text:
"Na miopia, objetos distantes podem ser percebidos com menor nitidez porque a focalização da imagem ocorre antes da retina."
},

hipermetropia:{
title:"Hipermetropia",
display:"FOCO PARA PERTO",
text:
"A hipermetropia pode dificultar a focalização de objetos próximos."
},

astigmatismo:{
title:"Astigmatismo",
display:"IMAGEM DISTORCIDA",
text:
"O astigmatismo pode provocar distorções e diferentes graus de desfoque devido à forma irregular da superfície ocular."
},

presbiopia:{
title:"Presbiopia",
display:"FOCO PRÓXIMO REDUZIDO",
text:
"A presbiopia está relacionada à redução da capacidade de focalizar objetos próximos."
},

catarata:{
title:"Catarata",
display:"VISÃO EMBAÇADA",
text:
"A catarata ocorre quando o cristalino perde transparência, podendo provocar visão embaçada."
},

daltonismo:{
title:"Daltonismo",
display:"PERCEPÇÃO DE CORES ALTERADA",
text:
"O daltonismo envolve alterações na percepção de determinadas cores."
}

};

const anomalyTitle =
document.getElementById("anomalyTitle");

const anomalyText =
document.getElementById("anomalyText");

const displayText =
document.getElementById("displayText");

document.querySelectorAll(".anomaly-card")
.forEach(card=>{

card.addEventListener("click",()=>{

const type =
card.dataset.anomaly;

const data =
anomalyData[type];

if(!data) return;

document.querySelectorAll(
".anomaly-card"
)
.forEach(c=>
c.classList.remove("active")
);

card.classList.add("active");

anomalyTitle.textContent =
data.title;

anomalyText.textContent =
data.text;

displayText.textContent =
data.display;

});

});


/* ==================================================
   LABORATÓRIO
================================================== */

const visionType =
document.getElementById("visionType");

const intensity =
document.getElementById("visionIntensity");

const intensityValue =
document.getElementById("intensityValue");

const preview =
document.getElementById("visionPreview");

const description =
document.getElementById("visionDescription");

const reset =
document.getElementById("resetVision");

const visionDescriptions={

normal:
"Percepção visual sem efeito aplicado.",

miopia:
"Simulação de perda de nitidez para objetos distantes.",

hipermetropia:
"Simulação de dificuldade de focalização para objetos próximos.",

astigmatismo:
"Simulação de distorção e perda de nitidez.",

presbiopia:
"Simulação de dificuldade de foco para objetos próximos.",

catarata:
"Simulação de redução da transparência e nitidez.",

daltonismo:
"Simulação simplificada de alteração na percepção das cores."

};

function updateVision(){

const type =
visionType.value;

const value =
Number(intensity.value);

intensityValue.textContent =
value+"%";

preview.className =
"simulation";

if(type!=="normal"){

preview.classList.add(
"vision-"+type
);

}

preview.style.setProperty(
"--intensity",
value/100
);

description.textContent =
visionDescriptions[type];

}

visionType.addEventListener(
"change",
updateVision
);

intensity.addEventListener(
"input",
updateVision
);

reset.addEventListener(
"click",
()=>{

visionType.value="normal";

intensity.value=50;

updateVision();

});

updateVision();


/* ==================================================
   NEWTON
================================================== */

const disc =
document.getElementById("newtonDisc");

const newtonButton =
document.getElementById("newtonButton");

newtonButton.addEventListener(
"click",
()=>{

disc.classList.toggle("spinning");

newtonButton.innerHTML =
disc.classList.contains("spinning")
? "Parar disco <span>■</span>"
: "Girar disco <span>↻</span>";

});


/* ==================================================
   QUIZ
================================================== */

const quizButton =
document.getElementById("quizButton");

const result =
document.getElementById("quizResult");

const scoreDisplay =
document.getElementById("quizScore");

quizButton.addEventListener(
"click",
()=>{

const questions=["q1","q2","q3"];

let score=0;

let answered=0;

questions.forEach(name=>{

const selected =
document.querySelector(
`input[name="${name}"]:checked`
);

if(selected){

answered++;

if(selected.value==="1"){

score++;

}

}

});

if(answered<3){

result.textContent =
"⚠ Responda todas as questões.";

return;

}

scoreDisplay.textContent =
String(score*10)
.padStart(2,"0");

if(score===3){

result.textContent =
"Excelente! Você acertou tudo. 👁️";

}

else if(score===2){

result.textContent =
"Muito bom! Você está quase lá.";

}

else{

result.textContent =
"Continue explorando o site e tente novamente.";

}

});


/* ==================================================
   ACESSIBILIDADE
================================================== */

const accessibilityButton =
document.getElementById(
"accessibilityButton"
);

accessibilityButton.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"accessibility-mode"
);

const active =
document.body.classList.contains(
"accessibility-mode"
);

accessibilityButton.innerHTML =
active
? "✓ Desativar acessibilidade"
: "🤟 Ativar acessibilidade";

});


/* ==================================================
   VOLTAR AO TOPO
================================================== */

const backTop =
document.getElementById("backTop");

window.addEventListener(
"scroll",
()=>{

backTop.classList.toggle(
"show",
window.scrollY>600
);

});

backTop.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==================================================
   ANIMAÇÃO DE ENTRADA
================================================== */

const revealElements =
document.querySelectorAll(
".section, .anomaly-card, .physics-step, .question"
);

const observer =
new IntersectionObserver(
(entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"revealed"
);

}

});
},
{
threshold:.08
}
);

revealElements.forEach(
element=>
observer.observe(element)
);


});
