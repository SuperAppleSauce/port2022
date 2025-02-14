
document.addEventListener("DOMContentLoaded", function() {
    const breadcrumbLinks = document.querySelectorAll('.breadcrumbs a');
    const sections = document.querySelectorAll('section');
    const breadcrumbs = document.querySelector('.breadcrumbs');
    const backToTop = document.createElement('button');

    // Create "Back to Top" button
    backToTop.className = 'back-to-top';
    backToTop.textContent = 'Back to Top';
    document.body.appendChild(backToTop);

    const scrollToSection = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - (breadcrumbs ? breadcrumbs.offsetHeight : 0) - 10,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - (breadcrumbs ? breadcrumbs.offsetHeight : 0) - 50;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
                if (!section.classList.contains('visible')) {
                    section.classList.add('visible');
                }
            }
        });

        breadcrumbLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
                const parent = link.parentElement.parentElement;
                parent.scrollTo({
                    left: link.offsetLeft - parent.offsetWidth / 2 + link.offsetWidth / 2,
                    behavior: 'smooth'
                });
            }
        });

        // Show/hide Back to Top button
        if (window.scrollY > document.body.scrollHeight * 0.2) {
            backToTop.style.display = 'none';
        } else {
            backToTop.style.display = 'none';
        }
    };

    // Add smooth scrolling to breadcrumbs links
    breadcrumbLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add click event for Back to Top button
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', handleScroll);
});

