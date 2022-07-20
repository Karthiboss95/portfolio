var typed = new Typed("#auto-type", {
    strings: ["Front End Developer."],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
})  

let hamburger=document.querySelector(".Hamburger");
let navMenu=document.querySelector("#header");
let navlink=document.querySelectorAll(".nav-menu .nav-link");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navlink.forEach(i => { 
    i.addEventListener("click",() =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        console.log(e)
    });
} )


  
