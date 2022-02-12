'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(navbarHeight); check용
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    // console.log(event.target.dataset.link);
    scrollIntoViews(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',() => {
    scrollIntoViews('#contact');
});

//Make home slowly fade to transparent as the window scrolls down 
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(1-window.scrollY / homeHeight);
    home.style.opacity = 1-window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up")
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2 ) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoViews('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    // console.log(filter);
    if(filter == null) {
        return;
    }

    //Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    // querySelector에서는 "." 클래스표시를 하지만 classList에서는 "." 표시 안함
    active.classList.remove('selected');
    const target = 
        e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode
    target.classList.add('selected');


    // 클릭하면 작아지면서 사라짐 -> 필터링 -> 필터링된게 나타남
    projectContainer.classList.add('anim-out');
    // add 와 remove anim-out, filter링의 타이밍차이를 위해 setTimeout안에 필터링을 작성
    setTimeout(() => {
        projects.forEach((project) => {
            // console.log(project.dataset.type);
            if(filter ==='*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300)
});

function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
};



