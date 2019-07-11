function santasNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach(section => {
    section.addEventListener("mouseenter", function() {
      const id = this.getAttribute("id");
      const activeSection = document.querySelector(`a[href="#${id}"]`);
      navLinks.forEach(nav => nav.classList.remove("active"));
      activeSection.classList.add("active");
    });
  });
}

santasNav();

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click',() => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    })
    //Burger Animation
    burger.classList.toggle('toggle');
  })
}

navSlide();