/* =========================
   MENÚ RESPONSIVE
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   CERRAR MENÚ AL SELECCIONAR
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   ANIMACIÓN AL HACER SCROLL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   BARRAS DE CONOCIMIENTO
========================= */

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const progress = entry.target;

                progress.style.width =
                    getComputedStyle(progress)
                    .getPropertyValue("--progress");

                skillObserver.unobserve(progress);

            }

        });

    },
    {
        threshold: 0.5
    }
);

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =========================
   EFECTO SUAVE DEL HEADER
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(13, 13, 13, 0.95)";

    } else {

        header.style.background = "rgba(13, 13, 13, 0.8)";

    }

});
