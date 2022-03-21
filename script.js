const btn = document.querySelector(".header__nav-toggler")
const navList = document.querySelector(".nav__list")

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    navList.classList.toggle("hide")
})