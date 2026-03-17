document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Reveal
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up, .fade-up-delay-1, .fade-up-delay-2, .fade-up-delay-3');
    fadeElements.forEach(el => observer.observe(el));

    // 2. Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll('.nav-links a, .hero-btns a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const offsetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Mobile Menu Toggle (Simplified placeholder)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navUl = document.querySelector('.nav-links');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
            mobileBtn.classList.toggle('open');
        });
    }

    // 4. Form Submission Mockup
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('메시지가 성공적으로 전송되었습니다! 학과에서 곧 연락드리겠습니다.');
            contactForm.reset();
        });
    }

    // 5. Hero Parallax Effect (Subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImg = document.querySelector('.hero-img');
        if (heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

    // 6. Header Background on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '10px 0';
            header.style.boxShadow = 'none';
        }
    });
});
