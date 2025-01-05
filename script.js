if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    window.location.href = "index.html"; 
}

document.addEventListener("DOMContentLoaded", () => {
    const timeline = gsap.timeline();

    // Animate Desktop
    timeline.fromTo(
        "#box1",
        { opacity: 0 },
        { opacity: 1, duration: 1 }
    );

    // Animate Moon
    timeline.fromTo(
        "#box2",
        { opacity: 0, bottom: "-400px" },
        { opacity: 1, bottom: "300px", duration: 2, ease: "power2.out" }
    );

    // Animate Side Tree
    timeline.fromTo(
        "#box3",
        { opacity: 0, x: "100%" },
        { opacity: 1, x: "0%", duration: 2.5, delay: 0.8, ease: "power2.out" },
        "-=1"
    );

    // Animate Left Mountain
    timeline.fromTo(
        "#box4",
        { opacity: 0, x: "-100%" },
        { opacity: 1, x: "0%", duration: 1.5, delay: 1, ease: "power2.out" },
        "-=1"
    );

    // Animate Back Mountain
    timeline.fromTo(
        "#box5",
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
        "-=1"
    );
});


function toggleMenu() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mainNavbar = document.querySelector('.main-navbar');
    hamburgerButton.classList.toggle('active');
    mainNavbar.classList.toggle('active');
}

