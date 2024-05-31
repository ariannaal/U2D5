document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('header');
    const hero = document.querySelector('#hero');
    const button = document.querySelector('.button-header');
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  console.log(heroBottom);
    window.addEventListener('scroll', function () {
        if (window.scrollY > heroBottom - 10) { // poco prima che esca dalla sezione hero
            navbar.classList.add('scrolled');
            button.classList.add('scrolled');
    } else {
            navbar.classList.remove('scrolled');
             button.classList.remove('scrolled');
    }
  });
});