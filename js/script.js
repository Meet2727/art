
/* ==========================

```javascript id="m8y8kv"
   LIKE BUTTON
========================== */

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        if(icon.classList.contains("far")){

            icon.classList.remove("far");
            icon.classList.add("fas");

            button.style.color = "#ff4d6d";

        }else{

            icon.classList.remove("fas");
            icon.classList.add("far");

            button.style.color = "white";
        }

    });

});

/* ==========================
   SEARCH FILTER
========================== */

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {

        const text =
        post.innerText.toLowerCase();

        if(text.includes(value)){
            post.style.display = "block";
        }else{
            post.style.display = "none";
        }

    });

});

}

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
    document.querySelector(
        this.getAttribute("href")
    );

    if(target){

        target.scrollIntoView({
            behavior:"smooth"
        });

    }

});

});

/* ==========================
   IMAGE LIGHTBOX
========================== */

const images =
document.querySelectorAll(
'.gallery-grid img, .post-image'
);

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
<img id="lightbox-img">
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

/* ==========================
   LIGHTBOX STYLE
========================== */

const style =
document.createElement("style");

style.innerHTML = `

#lightbox{

position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.95);

display:none;

justify-content:center;
align-items:center;

z-index:99999;

}

#lightbox.active{
display:flex;
}

#lightbox img{

max-width:90%;
max-height:90%;
border-radius:15px;

}

`;

document.head.appendChild(style);

/* ==========================
   FADE-IN ANIMATION
========================== */

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

    if(entry.isIntersecting){

        entry.target.style.opacity = 1;

        entry.target.style.transform =
        "translateY(0px)";
    }

});

});

const animateItems =
document.querySelectorAll(
'.post, .artist-card, .gallery-grid img'
);

animateItems.forEach(item => {

item.style.opacity = 0;

item.style.transform =
'translateY(40px)';

item.style.transition =
'all .8s ease';

observer.observe(item);

});

/* ==========================
   STATS COUNTER
========================== */

const counters =
document.querySelectorAll(".stats h3");

counters.forEach(counter => {

const target =
parseInt(
counter.innerText.replace(/\D/g,'')
);

if(!target) return;

let current = 0;

const update = () => {

current += Math.ceil(target/100);

if(current > target){

current = target;

}

counter.innerText = current;

if(current < target){

requestAnimationFrame(update);

}

};

update();

});

/* ==========================
   STORY HOVER EFFECT
========================== */

const stories =
document.querySelectorAll(".story");

stories.forEach(story => {

story.addEventListener("mouseenter", () => {

story.style.transform =
"scale(1.08)";

story.style.transition =
".3s";

});

story.addEventListener("mouseleave", () => {

story.style.transform =
"scale(1)";

});

});

/* ==========================
   FOLLOW BUTTON
========================== */

const followBtn =
document.querySelector(".follow-btn");

if(followBtn){

followBtn.addEventListener("click", () => {

if(followBtn.innerText === "Follow"){

followBtn.innerText =
"Following";

followBtn.style.background =
"#22c55e";

}else{

followBtn.innerText =
"Follow";

followBtn.style.background =
"#ff4d6d";

}

});

}

/* ==========================
   REEL AUTOPLAY ON VIEW
========================== */

const videos =
document.querySelectorAll("video");

const videoObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.play();

}else{

entry.target.pause();

}

});

},{threshold:.5});

videos.forEach(video => {

videoObserver.observe(video);

});

/* ==========================
   PAGE LOADED
   ```
========================== */

window.addEventListener("load", () => {

console.log(
"ArtGram Loaded Successfully"
);

});

