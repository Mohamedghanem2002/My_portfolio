/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });

let section = document.getElementById("skills");
let spans = document.querySelectorAll(".skills__data .skills__bar");
let span = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  this.scrollY >= 700
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// MailJs
// const contactForm = document.getElementById("contact-form"),
//   contactMessage = document.getElementById("contact-message");

// const sendEmail = (e) => {
//   e.preventDefault();

//   // serviceID - templateID - #form - publicKey
//   emailjs
//     .sendForm(
//       "service_q9fq0gp",
//       "template_i1xal6h",
//       "#contact-form",
//       "OlR4hly81SruuDnxG"
//     )
//     .then(
//       () => {
//         // Show sent message
//         contactMessage.textContent = "Message sent successfully ✅";

//         // Remove message after five seconds
//         setTimeout(() => {
//           contactMessage.textContent = "";
//         }, 5000);

//         // Clear input fields
//         contactForm.reset();
//       },
//       () => {
//         // Show error message
//         contactMessage.textContent = "Message not sent (service error) ❌";
//       }
//     );
// };

// contactForm.addEventListener("submit", sendEmail);

var typing = new Typed(".type", {
  strings: ["Front-End Developer", "Problem Solving"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});
