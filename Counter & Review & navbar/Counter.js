/*Navbar Code */
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click" , function(){
    links.classList.toggle("show-links");
})
/*Counter code*/

let count = 0 ;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click" , function(e){
        const style = e.currentTarget.classList;
        if (style.contains("decrease")){
            count--;
        }
        else if (style.contains("increase")){
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "red";
        }
        if(count===0){
            value.style.color = "#222";
        }
        value.textContent= count;
    });
});

/*Reviews code*/
const reviews = [
    {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    info:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    info:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    info:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    info:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("jop");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
    currentItem = 0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
    currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
randomBtn.addEventListener("click", function () {

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});