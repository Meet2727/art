
/* ==================================
   PAGE LOADED
================================== */

window.addEventListener("load", () => {
    console.log("ArtGram Loaded Successfully");
});

/* ==================================
   LIKE BUTTON SYSTEM
================================== */

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        if(icon.classList.contains("far")){

            icon.classList.remove("far");
            icon.classList.add("fas");

            button.style.color = "#ff4d6d";
            button.innerHTML =
            '<i class="fas fa-heart"></i> Liked';

        }else{

            icon.classList.remove("fas");
            icon.classList.add("far");

            button.style.color = "#fff";
            button.innerHTML =
            '<i class="far fa-heart"></i> Like';
        }

    });

});

/* ==================================
   SEARCH POSTS
================================== */

const searchInput =
document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const posts =
    document.querySelectorAll(".post");

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

/* ==================================
   PROFILE EDIT
================================== */

const editBtn =
document.getElementById("editProfileBtn");

if(editBtn){

editBtn.addEventListener("click", () => {

    const name =
    prompt("Enter Artist Name");

    if(name){

        const profileTitles =
        document.querySelectorAll(
        ".profile-info h3, .profile-card h3"
        );

        profileTitles.forEach(title => {
            title.innerText = name;
        });

        alert("Profile Updated!");
    }

});

}

/* ==================================
   CONTACT FORM
================================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", e => {

    e.preventDefault();

    alert(
    "Thank you! Your message has been sent."
    );

    contactForm.reset();

});

}

/* ==================================
   NEWSLETTER
================================== */

const newsletterBtn =
document.querySelector(".newsletter button");

if(newsletterBtn){

newsletterBtn.addEventListener("click", () => {

    const email =
    document.querySelector(
    ".newsletter input"
    ).value;

    if(email){

        alert(
        "Subscribed Successfully!"
        );

    }else{

        alert(
        "Please enter an email."
        );

    }

});

}

/* ==================================
   LIGHTBOX
================================== */

const galleryImages =
document.querySelectorAll(
".gallery-grid img, .post-image"
);

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML =
'<img id="lightbox-img">';

document.body.appendChild(lightbox);

galleryImages.forEach(img => {

img.addEventListener("click", () => {

    lightbox.classList.add("active");

    document.getElementById(
    "lightbox-img"
    ).src = img.src;

});

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* ==================================
   LIGHTBOX STYLE
================================== */

const lightboxStyle =
document.createElement("style");

lightboxStyle.innerHTML = `

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
z-index:999999;
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

document.head.appendChild(
lightboxStyle
);

/* ==================================
   SMOOTH SCROLL
================================== */

document
.querySelectorAll(
'a[href^="#"]'
)
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

/* ==================================
   REEL AUTOPLAY
================================== */

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
threshold:.5
});

videos.forEach(video => {

videoObserver.observe(video);

});

/* ==================================
   FADE IN ANIMATION
================================== */

const animatedElements =
document.querySelectorAll(
'.post, .gallery-grid img, .reel-card, .profile-card'
);

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

    if(entry.isIntersecting){

        entry.target.style.opacity = 1;

        entry.target.style.transform =
        "translateY(0)";

    }

});

},{
threshold:.2
});

animatedElements.forEach(el => {

el.style.opacity = 0;

el.style.transform =
"translateY(40px)";

el.style.transition =
"all .8s ease";

observer.observe(el);

});

/* ==================================
   STORY HOVER
================================== */

const stories =
document.querySelectorAll(".story");

stories.forEach(story => {

story.addEventListener(
"mouseenter",
() => {

story.style.transform =
"scale(1.08)";

story.style.transition =
".3s";

});

story.addEventListener(
"mouseleave",
() => {

story.style.transform =
"scale(1)";

});

});

/* ==================================
   FOLLOW BUTTON
================================== */

const followBtn =
document.querySelector(".follow-btn");

if(followBtn){

followBtn.addEventListener(
"click",
() => {

if(
followBtn.innerText ===
"Follow"
){

followBtn.innerText =
"Following";

followBtn.style.background =
"#22c55e";

}else if(
followBtn.innerText ===
"Following"
){

followBtn.innerText =
"Follow";

followBtn.style.background =
"#ff4d6d";

}

});

}

/* ==================================
   GALLERY IMAGE COUNTER
================================== */

const galleryCount =
document.querySelectorAll(
".gallery-grid img"
).length;

console.log(
"Total Gallery Images:",
galleryCount
);

/* ==================================
   KEYBOARD SHORTCUTS
================================== */

document.addEventListener(
"keydown",
e => {

if(e.key === "Escape"){

    lightbox.classList.remove(
    "active"
    );

}

});

/* ==================================
   RANDOM REEL TITLE EFFECT
================================== */

const reelTitles =
document.querySelectorAll(
".reel-card h3"
);

reelTitles.forEach(title => {

title.addEventListener(
"mouseenter",
() => {

title.style.color =
"#ff4d6d";

});

title.addEventListener(
"mouseleave",
() => {

title.style.color =
"#fff";

});

});
