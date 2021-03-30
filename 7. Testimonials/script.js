window.onload = buttonNext;
document.getElementById("buttForward").onclick = buttonNext;
document.getElementById("buttBack").onclick = buttonBack;

var testimonies = [{
        image: "images/1.jpg",
        name: "Thorin Oakenshield",
        rating: "★★★★★",
        testimony: "Great website! Would use more often !"
    },
    {
        image: "images/2.jpg",
        name: "Balin",
        rating: "★★★★★",
        testimony: "The craftsmanship of this website is respectable. 5 Stars."
    },
    {
        image: "images/3.jpg",
        name: "Dwalin",
        rating: "★★★★",
        testimony: "I don't know why i'm here."
    },
    {
        image: "images/4.jpg",
        name: "Gandalf",
        rating: "★★",
        testimony: "I've seen better."
    },
    {
        image: "images/5.jpg",
        name: "Bilbo",
        rating: "★★★★★",
        testimony: "Magnificient !"
    }
];

let t = -1;

function buttonNext() {
    if (t < (testimonies.length - 1)) {
        t++;
    } else {
        t = 0;
    }
    document.getElementById("clientPicture").src = testimonies[t].image;
    document.getElementById("name").innerHTML = testimonies[t].name;
    document.getElementById("rating").innerHTML = testimonies[t].rating;
    document.getElementById("testimonial").innerHTML = testimonies[t].testimony;
}

function buttonBack() {
    if (t >= 1) {
        t--;
    } else {
        t = (testimonies.length - 1);
    }
    document.getElementById("clientPicture").src = testimonies[t].image;
    document.getElementById("name").innerHTML = testimonies[t].name;
    document.getElementById("rating").innerHTML = testimonies[t].rating;
    document.getElementById("testimonial").innerHTML = testimonies[t].testimony;
}