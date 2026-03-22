/* =====================================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ===================================================== */

// EmailJS Configuration
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
// emailjs.init('x5g8yMGjj2S5N7H6v');

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

/* =====================================================
   PROJECTS DATA & RENDERING
   ===================================================== */

const projectsData = [
    {
        id: 1,
        name: 'Perfume Website',
        url: 'https://example.com/ecommerce',
        image: 'perfimg.png'
    },
    {
        id: 2,
        name: 'Task Management App',
        url: 'https://example.com/tasks',
        image: ''
    },
    {
        id: 3,
        name: 'Weather Dashboard',
        url: 'https://example.com/weather',
        image: ''
    },
    {
        id: 4,
        name: 'Portfolio Website',
        url: 'https://example.com/portfolio',
        image: 'portfolio.png'
    },
    {
        id: 5,
        name: 'Blog Platform',
        url: 'https://example.com/blog',
        image: 'blogimg.png'
    },
    {
        id: 6,
        name: 'Business website',
        url: 'https://pappygee.github.io/Metose-sons-Enterprise/',
        image: ''
    }
];

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-image"><img src="${project.image}" alt="${project.name}"></div>
            <div class="project-info">
                <div class="project-name">${project.name}</div>
                <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                 View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

/* =====================================================
   SKILLS DATA & RENDERING
   ===================================================== */

const skillsData = [
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 93, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'React', level: 50, icon: 'fab fa-react' },
    { name: 'PHP', level: 40, icon: 'fab fa-php' },
    { name: 'SQL', level: 50, icon: 'fab fa-sql' },
    { name: 'MSQL', level: 70, icon: 'fab fa-mysql' },
    { name: 'Git', level: 88, icon: 'fab fa-git-alt' },
    { name: 'Responsive Design', level: 92, icon: 'fas fa-mobile-alt' },
    { name: 'Web Performance', level: 85, icon: 'fas fa-bolt' },
    { name: 'Accessibility', level: 88, icon: 'fas fa-universal-access' }
];

function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skillsData.map((skill, index) => `
        <div class="skill-card" style="animation-delay: ${index * 0.1}s;">
            <div class="skill-icon"><i class="${skill.icon}"></i></div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">${skill.level}% Proficient</div>
            <div class="progress-bar">
                <div class="progress-fill" style="--progress-width: ${skill.level}%; animation-delay: ${index * 0.1 + 0.3}s;"></div>
            </div>
        </div>
    `).join('');
}

/* =====================================================
   CERTIFICATES DATA & RENDERING
   ===================================================== */

const certificatesData = [
    {
        id: 1,
        title: 'Advanced Web Development',
        issuer: 'Codecademy'
    },
    {
        id: 2,
        title: 'React Mastery Course',
        issuer: 'Udemy'
    },
    
    {
        id: 3,
        title: 'Web Design Fundamentals',
        issuer: 'Coursera'
    },
    // {
    //     id: 4,
    //     title: 'JavaScript Complete Guide',
    //     issuer: 'Udemy'
    // },
        {
        id: 4,
        title: 'Bachelor Degree In Computer science',
        issuer: 'Lagos state University Of Education'
        },
    // {
    //     id: 5,
    //     title: 'UI/UX Design Basics',
    //     issuer: 'Google'
    // },
    {
        id: 5,
        title: 'National Diploma In Computer Science',
        issuer: 'Gateway ICT Polytechnic'
    },
    {
        id: 6,
        title: 'Web Performance Optimization',
        issuer: 'Frontend Masters'
    }
];

function renderCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    if (!certificatesGrid) return;

    certificatesGrid.innerHTML = certificatesData.map((cert, index) => `
        <div class="certificate-card" data-cert-id="${cert.id}" style="animation-delay: ${index * 0.1}s;">
            <div class="certificate-image">
                <i class="fas fa-certificate"></i>
            </div>
            <div class="certificate-title">${cert.title}</div>
        </div>
    `).join('');


    // Certificate modal
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('click', () => {
            const certId = card.dataset.certId;
            const cert = certificatesData.find(c => c.id == certId);
            openCertificateModal(cert);
        });
    });
}

function openCertificateModal(certificate) {
    const modal = document.getElementById('certificateModal') || createCertificateModal();
    const modalTitle = modal.querySelector('.modal-title');
    modalTitle.textContent = certificate.title + ' - ' + certificate.issuer;
    modal.classList.add('active');
}

function createCertificateModal() {
    const modal = document.createElement('div');
    modal.id = 'certificateModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h2 class="modal-title"></h2>
            <div class="modal-image"></div>
            <p style="text-align: center; color: #6b7280;">Certificate preview displayed</p>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    return modal;
}

/* =====================================================
   EDUCATION DATA & RENDERING
   ===================================================== */

const educationData = [
    {
        year: 2024,
        school: 'Lagos State University Of Education',
        program: 'Bachelor of Science ED(BSC.ED.) in Computer Science'
    },
        {
        year: 2024,
        school: '3MTT',
        program: 'Full Stack Web Development'  
    },
    {
        year: 2023,
        school: 'Online Learning Platform',
        program: 'Full Stack JavaScript Development'  
    },
    {
        year: 2023,
        school: 'Gateway ICT POlytechnic Saapade',
        program: 'National Diploma(ND) in computer science'  
    },
    {
        year: 2022,
        school: 'G-Crown IT Solutions',
        program: 'Advanced Web Development Bootcamp' 
    }
];

function renderEducation() {
    const educationTimeline = document.getElementById('educationTimeline');
    if (!educationTimeline) return;

    educationTimeline.innerHTML = educationData.map((edu, index) => `
        <div class="timeline-item" style="animation-delay: ${index * 0.2}s;">
            <div class="timeline-year">${edu.year}</div>
            <div class="timeline-school">${edu.school}</div>
            <div class="timeline-program">${edu.program}</div>
        </div>
    `).join('');
}

/* =====================================================
   TESTIMONIALS DATA & RENDERING
   ===================================================== */

const testimonialsData = [
    {
        id: 1,
        name: 'Metose J.',
        text: 'Christopher delivered an exceptional website for our business. His attention to detail, deep understanding of web technologies, and commitment to quality are unmatched.',
        rating: 5
    },
    {
        id: 2,
        name: 'Health Educator Elizabeth',
        text: 'Working with Christopher was a pleasure. He completed my project on time with excellent communication throughout. Highly recommended!',
        rating: 5
    },
    {
        id: 3,
        name: 'Beth Equisite',
        text: 'Christopher transformed my vision into a stunning, responsive website. His expertise in front-end development is truly impressive.',
        rating: 5
    },
    {
        id: 4,
        name: 'Odugbesan Elizabeth',
        text: 'Professional, talented, and dedicated. Christopher went above and beyond to ensure my portfolio website was perfect.',
        rating: 5
    }
];

function renderTestimonials() {
    const testimonialsCarousel = document.getElementById('testimonialsCarousel');
    if (!testimonialsCarousel) return;

    testimonialsCarousel.innerHTML = testimonialsData.map((testimonial, index) => `
        <div class="testimonial-card" style="animation-delay: ${index * 0.1}s;">
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-author">— ${testimonial.name}</div>
            <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
        </div>
    `).join('');
}

/* =====================================================
   CONTACT FORM HANDLING
   ===================================================== */

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Prepare form data for EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'odugbesanchristopher21@gmail.com' // Change this to your email
        };

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Send email via EmailJS
        emailjs.send('service_7ssjhkj', 'template_37f9h7w', templateParams)
            .then((response) => {
                console.log('Email sent successfully!', response);
                showNotification('Message sent successfully! Thank you for reaching out.', 'success');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                showNotification('Failed to send message. Please try again later.', 'error');
            })
            .finally(() => {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* =====================================================
   INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ===================================================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

/* =====================================================
   SMOOTH SCROLL OFFSET FOR FIXED NAVBAR
   ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* =====================================================
   INITIALIZE ALL COMPONENTS
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    renderCertificates();
    renderEducation();
    renderTestimonials();

    console.log('Portfolio website initialized successfully!');
});

/* =====================================================
   KEYBOARD NAVIGATION ENHANCEMENTS
   ===================================================== */

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #10b981;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 100;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

/* =====================================================
   PREFERS REDUCED MOTION
   ===================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.01ms !important';
        el.style.transitionDuration = '0.01ms !important';
    });
}
