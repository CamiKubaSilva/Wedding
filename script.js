document.addEventListener("mousemove", function(e) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.top = e.pageY + 'px';
    sparkle.style.left = e.pageX + "px";
    sparkle.textContent = "✨";
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 500);
});

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document
                .querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    // Section fade-in animation
    const sections = document.querySelectorAll(".section, .photo-frame");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(40px)";
        section.style.transition = "opacity 1s ease, transform 1s ease";
        observer.observe(section);
    });

    // Floating Cats
    const cats = document.querySelectorAll(".floating-cat");

    function floatCat(cat, speed, range) {
        let angle = 0;
        setInterval(() => {
            angle += speed;
            cat.style.transform = `translateY(${Math.sin(angle) * range}px)`;
        }, 30);
    }

    // Ensure hover works by adding pointer-events explicitly
    cats.forEach(cat => {
        cat.style.pointerEvents = "auto"; 
        floatCat(cat, 0.03, 10);
    });

    // Automatic Image Carousel with Smooth Transition
    const images = document.querySelectorAll(".carousel img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Automatically change images every 5 seconds
    setInterval(nextImage, 5000);

    // Ensure the first image is visible on page load
    showImage(currentIndex);
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function closeMenu() {
    document.querySelector(".nav-links").classList.remove("active");
}
