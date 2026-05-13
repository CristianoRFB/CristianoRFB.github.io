document.documentElement.classList.add("has-motion");

const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-list a");
const revealItems = document.querySelectorAll(".reveal");

if (header) {
    const syncHeaderState = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    syncHeaderState();
    window.addEventListener("scroll", syncHeaderState, { passive: true });
}

if (navbar && navToggle) {
    const closeMenu = () => {
        navbar.classList.remove("menu-open");
        navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("menu-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

if (revealItems.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.16,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealItems.forEach((item) => observer.observe(item));
}
