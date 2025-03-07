document.addEventListener("mousemove", function(e) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.top = e.pageY + 'px';
    sparkle.style.left = e.pageX + "px";
    sparkle.textContent = "✨";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 500);
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Section fade-in animation
    const sections = document.querySelectorAll('.section, .photo-frame');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(section);
    });

    // Sparkle effect on click
    document.addEventListener('click', (e) => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.top = `${e.pageY - 10}px`;
        sparkle.style.left = `${e.pageX - 10}px`;
        sparkle.innerText = '✨';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 500);
    });
});

// CATS
document.addEventListener('DOMContentLoaded', () => {
    const cats = document.querySelectorAll('.floating-cat');

    function floatCat(cat, speed, range) {
        let angle = 0;
        setInterval(() => {
            angle += speed;
            cat.style.transform = `translateY(${Math.sin(angle) * range}px)`;
        }, 30);
    }

    floatCat(cats[0], 0.03, 10);
    floatCat(cats[1], 0.03, 10);
});

// CARROUSEL
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});