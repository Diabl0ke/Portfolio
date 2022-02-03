const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Animation scroll

const sr = ScrollReveal();

sr.reveal('.intro', {
    origin:'top',
    distance:'50px',
    duration : 2000,
});

sr.reveal ('h1', {
    delay: 500
})

sr.reveal ('.my-services', {
    origin:'bottom',
    distance:'200px',
    delay: 750,
})

sr.reveal ('.about-me', {
    origin:'left',
    distance:'200px',
    delay: 750,
})

sr.reveal ('.my-work', {
    origin:'right',
    distance:'200px',
    delay: 750,
})