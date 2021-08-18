burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist =document.querySelector('.nav-list')
rightnavbar=document.querySelector('.right-nav')


burger.addEventListener('click',()=>{
    rightnavbar.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

