/* ======================================
   NEOART FUTURISTIC SCRIPT
====================================== */

/* ======================================
   PAGE LOADER
====================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("NeoArt Initialized");

});

/* ======================================
   SMOOTH SCROLL
====================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", e => {

        e.preventDefault();

        const target =
        document.querySelector(
        anchor.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

/* ======================================
   ANIMATED COUNTERS
====================================== */

const counters =
document.querySelectorAll(".stat-card h2");

const counterObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter =
entry.target;

const target =
parseInt(
counter.innerText.replace(/\D/g,'')
);

let current = 0;

const update = () => {

current += Math.ceil(target/80);

if(current > target){

current = target;

}

const suffix =
counter.innerText.includes("K")
? "K+"
: counter.innerText.includes("+")
? "+"
: "";

counter.innerText =
current + suffix;

if(current < target){

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter => {

counterObserver.observe(counter);

});

/* ======================================
   IMAGE LIGHTBOX
====================================== */

const images =
document.querySelectorAll(
".art-card img"
);

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
<img id="lightbox-img">
<span id="close-lightbox">&times;</span>
`;

document.body.appendChild(lightbox);

images.forEach(image => {

image.addEventListener("click", () => {

    lightbox.classList.add("active");

    document
    .getElementById("lightbox-img")
    .src = image.src;

});

});

lightbox.addEventListener("click", () => {

lightbox.classList.remove("active");

});

/* ======================================
   LIGHTBOX STYLE
====================================== */

const lightboxStyle =
document.createElement("style");

lightboxStyle.innerHTML = `

#lightbox{

position:fixed;

top:0;
left:0;

width:100%;
height:100%;

background:
rgba(0,0,0,.95);

display:none;

justify-content:center;
align-items:center;

z-index:999999;

}

#lightbox.active{

display:flex;

}

#lightbox img{

max-width:90%;
max-height:90%;

border-radius:20px;

box-shadow:
0 0 40px #00d4ff;

}

#close-lightbox{

position:absolute;

top:20px;
right:40px;

font-size:50px;

color:white;

cursor:pointer;

}

`;

document.head.appendChild(
lightboxStyle
);

/* ======================================
   SCROLL REVEAL
====================================== */

const revealElements =
document.querySelectorAll(
'.art-card, .artist-card, .reel-card, .testimonial-card'
);

const revealObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1;

entry.target.style.transform =
'translateY(0px)';

}

});

},{
threshold:.15
});

revealElements.forEach(el => {

el.style.opacity = 0;

el.style.transform =
'translateY(50px)';

el.style.transition =
'all .8s ease';

revealObserver.observe(el);

});

/* ======================================
   REELS AUTO PLAY
====================================== */

const videos =
document.querySelectorAll("video");

const videoObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.play()
.catch(() => {});

}else{

entry.target.pause();

}

});

},{
threshold:.6
});

videos.forEach(video => {

videoObserver.observe(video);

});

/* ======================================
   FOLLOW BUTTONS
====================================== */

const followButtons =
document.querySelectorAll(
'.artist-card button'
);

followButtons.forEach(btn => {

btn.addEventListener("click", () => {

if(btn.innerText === "Follow"){

btn.innerText = "Following";

btn.style.background =
"#00ff99";

btn.style.boxShadow =
"0 0 20px #00ff99";

}else{

btn.innerText = "Follow";

btn.style.background =
"linear-gradient(45deg,#00d4ff,#0066ff)";

btn.style.boxShadow =
"0 0 20px #00d4ff";

}

});

});

/* ======================================
   CONTACT FORM
====================================== */

const contactForm =
document.getElementById(
"contactForm"
);

if(contactForm){

contactForm.addEventListener(
"submit",
e => {

e.preventDefault();

showNotification(
"Message Sent Successfully!"
);

contactForm.reset();

});

}

/* ======================================
   NEWSLETTER
====================================== */

const newsletterBtn =
document.querySelector(
".newsletter button"
);

if(newsletterBtn){

newsletterBtn.addEventListener(
"click",
() => {

const email =
document.querySelector(
'.newsletter input'
).value;

if(email){

showNotification(
"Subscription Successful!"
);

}else{

showNotification(
"Enter Email Address"
);

}

});

}

/* ======================================
   FUTURISTIC NOTIFICATION
====================================== */

function showNotification(text){

const notification =
document.createElement("div");

notification.className =
"neo-notification";

notification.innerText =
text;

document.body.appendChild(
notification
);

setTimeout(() => {

notification.classList.add(
"show"
);

},100);

setTimeout(() => {

notification.classList.remove(
"show"
);

setTimeout(() => {

notification.remove();

},500);

},3000);

}

/* ======================================
   NOTIFICATION STYLE
====================================== */

const notificationStyle =
document.createElement("style");

notificationStyle.innerHTML = `

.neo-notification{

position:fixed;

bottom:30px;
right:30px;

background:
linear-gradient(
45deg,
#00d4ff,
#0066ff);

padding:15px 25px;

border-radius:12px;

color:white;

font-weight:bold;

opacity:0;

transform:
translateY(30px);

transition:.4s;

z-index:999999;

box-shadow:
0 0 30px #00d4ff;

}

.neo-notification.show{

opacity:1;

transform:
translateY(0);

}

`;

document.head.appendChild(
notificationStyle
);

/* ======================================
   PARALLAX HERO
====================================== */

window.addEventListener(
"mousemove",
e => {

const glow =
document.querySelector(
".glow-circle"
);

if(glow){

const x =
(e.clientX /
window.innerWidth)
* 30;

const y =
(e.clientY /
window.innerHeight)
* 30;

glow.style.transform =
`translate(${x}px, ${y}px)`;

}

});

/* ======================================
   FLOATING ART CARDS
====================================== */

const cards =
document.querySelectorAll(
'.art-card'
);

cards.forEach((card,index)=>{

card.animate(

[
{
transform:
'translateY(0px)'
},
{
transform:
'translateY(-10px)'
},
{
transform:
'translateY(0px)'
}
],

{
duration:
3000 + index * 400,

iterations:
Infinity

}

);

});

/* ======================================
   ESC KEY CLOSE LIGHTBOX
====================================== */

document.addEventListener(
"keydown",
e => {

if(
e.key === "Escape"
){

lightbox.classList.remove(
"active"
);

}

});

/* ======================================
   RANDOM GLOW EFFECT
====================================== */

setInterval(() => {

const cards =
document.querySelectorAll(
'.art-card'
);

const randomCard =
cards[
Math.floor(
Math.random() *
cards.length
)
];

randomCard.style.boxShadow =
"0 0 40px #00d4ff";

setTimeout(() => {

randomCard.style.boxShadow =
"";

},1000);

},3000);
