window.addEventListener("load",()=>{

    const loading = document.getElementById("loadingScreen");

    setTimeout(()=>{
        loading.style.opacity="0";

        setTimeout(()=>{
            loading.style.display="none";
        },1000);

    },2000);

});

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

window.addEventListener("scroll",()=>{

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background="#020617";

    }else{

        header.style.background="rgba(5,8,22,0.8)";
    }

});

console.log("APPME LOADED SUCCESSFULLY");