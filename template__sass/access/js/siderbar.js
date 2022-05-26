function siderbarEven(){
    let btn = document.querySelector(`#btn`);
    let siderbar  = document.querySelector(`.siderbar`);
    let search  = document.querySelector(`.bx-search`);
    let home__content = document.querySelector(`.home_content`);
    console.log(btn)
    btn.onclick = function(){
    siderbar.classList.toggle("active");
    home__content.classList.toggle(`home_content-active`);
    console.log("okok")
}
}
siderbarEven();



// --------------------header------------------------//
let listShop = document.querySelector(`.header__notification`);
listShop.addEventListener("click",()=>{
    listShop.querySelector(".list__notification").classList.toggle("display__block");
});





