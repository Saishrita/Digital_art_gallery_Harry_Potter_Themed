let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';

});

const titles = document.querySelectorAll('.sec_title');
const cards = document.querySelectorAll('.cat_card');
const paras = document.querySelectorAll('.content');
const imgs = document.querySelectorAll('.about_img');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

cards.forEach((card) => {
    observer.observe(card);
});

titles.forEach((title) => {
    observer.observe(title);
});

paras.forEach((para) => {
    observer.observe(para);
});

imgs.forEach((img) => {
    observer.observe(img);
});

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

function handleScroll() {
    navLinks.forEach((link) => {
        const targetSection = document.querySelector(link.getAttribute('href'));
        if (window.scrollY > targetSection.offsetTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
