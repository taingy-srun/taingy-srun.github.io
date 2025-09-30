document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    /*==================================
    * Modern Portfolio JavaScript
    * Author: Taingy Srun
    * Version: 2.0
    ==================================== */

    /*=========== TABLE OF CONTENTS ===========
    1. Navigation & Mobile Menu
    2. Smooth Scrolling
    3. Scroll Animations
    4. Theme & Interactive Elements
    5. Contact Form
    ======================================*/

    // 1. Navigation & Mobile Menu
    const nav = document.querySelector('.modern-nav');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 2. Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active nav link
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');

                // Close mobile menu
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.experience-card, .skill-category, .project-card, .highlight-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 4. Theme & Interactive Elements

    // Scroll to top button
    const scrollToTop = document.getElementById('scroll-to-top');
    if (scrollToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTop.style.opacity = '1';
                scrollToTop.style.visibility = 'visible';
            } else {
                scrollToTop.style.opacity = '0';
                scrollToTop.style.visibility = 'hidden';
            }
        });

        scrollToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll indicator in hero section
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Skill tags hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Project cards interaction
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 5. Contact Form (if needed)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add contact form handling logic here
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    // Typing animation for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing animation
    const heroName = document.querySelector('.hero-title .name');
    if (heroName) {
        const originalText = heroName.textContent;
        setTimeout(() => {
            typeWriter(heroName, originalText, 150);
        }, 1000);
    }


    // Initialize AOS-like animations
    function initScrollAnimations() {
        const elements = document.querySelectorAll('[data-animate]');

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
        });

        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            animationObserver.observe(element);
        });
    }

    // Initialize all animations
    initScrollAnimations();

    // Add smooth reveal animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        observer.observe(section);
    });

    console.log('Modern Portfolio initialized successfully!');

    // 6. Chatbot functionality
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Resume data
    const resumeData = {
        name: "Taingy Srun",
        email: "taingy.srun23@gmail.com",
        phone: "(949) 969-7793",
        location: "Irvine, CA",
        linkedin: "https://www.linkedin.com/in/taingy-srun",
        github: "https://github.com/taingy-srun",
        summary: "Software Engineer with 5+ years of experience designing, developing, and delivering scalable web and mobile applications across healthcare, fintech, and agri-tech industries. Skilled in full-stack development using Java Spring Boot, Angular, Kotlin, SQL, and Git.",
        education: [
            "Master of Science in Computer Science | Maharishi International University, Fairfield, IA, 2025",
            "Bachelor of Science in Information Technology | Build Bright University, Phnom Penh, Cambodia, 2018"
        ],
        skills: {
            languages: ["Java", "Kotlin", "JavaScript", "TypeScript", "Python"],
            frameworks: ["Spring Boot", "Spring MVC", "Spring Data", "JUnit", "Angular", "HTML", "CSS"],
            backend: ["RESTful APIs", "SOAP", "Microservices", "Kafka", "Hibernate", "JPA", "Swagger"],
            databases: ["PostgreSQL", "MySQL", "MongoDB"],
            cloud: ["AWS (S3, Lambda, RDS, Glue, Step Functions)", "Maven", "Gradle", "Git"],
            practices: ["Object Oriented Programming (OOP)", "OOAD", "Agile", "Scrum", "TDD", "Code Reviews", "AI-Driven Development"]
        },
        experience: [
            {
                title: "Software Engineer",
                company: "CuraPatient Inc.",
                location: "Irvine, CA",
                period: "04/2024 – 08/2025",
                highlights: [
                    "Developed full-stack healthcare web applications using Java Spring Boot and Angular",
                    "Designed ETL data pipeline using AWS S3, Glue, Lambda, and Step Functions processing 500M+ records",
                    "Built end-to-end Visit functionality improving weekly visit retention by 15%",
                    "Integrated AI-powered development tools reducing feature development time by 30%",
                    "Achieved 85%+ test coverage with JUnit and Mockito"
                ]
            },
            {
                title: "Software Developer",
                company: "Pi Pay",
                location: "Cambodia",
                period: "11/2020 – 12/2022",
                highlights: [
                    "Built APIs for biller onboarding reducing manual operations by 70%",
                    "Created Phone Top-Up API handling 3,000+ daily transactions per partner",
                    "Implemented KHQR functionality for seamless payments",
                    "Developed Bill Payment functionality improving customer retention by 10%"
                ]
            },
            {
                title: "Android Developer",
                company: "Agribuddy",
                location: "Cambodia",
                period: "06/2019 – 10/2020",
                highlights: [
                    "Developed Check-Attendance functionality achieving 100% company adoption",
                    "Implemented offline report storage reducing data loss by 50%",
                    "Trained teams improving workflow efficiency by 25%"
                ]
            },
            {
                title: "Android Developer",
                company: "TrueMoney",
                location: "Cambodia",
                period: "09/2018 – 06/2019",
                highlights: [
                    "Integrated Bluetooth printing reducing operational costs by 15%",
                    "Enhanced UI increasing user satisfaction by 20%",
                    "Reduced security vulnerabilities by 20% using SonarQube"
                ]
            }
        ]
    };

    // Toggle chatbot
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('active');
        });
    }

    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
        });
    }

    // Add message to chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'user-message' : 'bot-message';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = message;

        messageDiv.appendChild(contentDiv);
        chatbotMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-message typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return typingDiv;
    }

    // Remove typing indicator
    function removeTypingIndicator(indicator) {
        if (indicator && indicator.parentNode) {
            indicator.parentNode.removeChild(indicator);
        }
    }

    // Process user question
    function processQuestion(question) {
        const lowerQuestion = question.toLowerCase();

        // Experience questions
        if (lowerQuestion.includes('experience') || lowerQuestion.includes('work') || lowerQuestion.includes('job')) {
            let response = "<strong>Work Experience:</strong><br><br>";
            resumeData.experience.forEach(exp => {
                response += `<strong>${exp.title}</strong> at ${exp.company}<br>`;
                response += `${exp.location} | ${exp.period}<br><br>`;
            });
            return response;
        }

        // Skills questions
        if (lowerQuestion.includes('skill') || lowerQuestion.includes('technolog') || lowerQuestion.includes('tech stack') || lowerQuestion.includes('tech ')) {
            return `<strong>Technical Skills:</strong><br><br>
                    <strong>Languages:</strong> ${resumeData.skills.languages.join(', ')}<br><br>
                    <strong>Frameworks:</strong> ${resumeData.skills.frameworks.join(', ')}<br><br>
                    <strong>Databases:</strong> ${resumeData.skills.databases.join(', ')}<br><br>
                    <strong>Cloud & Tools:</strong> ${resumeData.skills.cloud.join(', ')}`;
        }

        // Education questions
        if (lowerQuestion.includes('education') || lowerQuestion.includes('degree') || lowerQuestion.includes('university') || lowerQuestion.includes('school')) {
            return `<strong>Education:</strong><br><br>${resumeData.education.join('<br><br>')}`;
        }

        // Contact questions
        if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('phone') || lowerQuestion.includes('reach')) {
            return `<strong>Contact Information:</strong><br><br>
                    📧 Email: ${resumeData.email}<br>
                    📱 Phone: ${resumeData.phone}<br>
                    📍 Location: ${resumeData.location}<br>
                    💼 LinkedIn: <a href="${resumeData.linkedin}" target="_blank">View Profile</a><br>
                    💻 GitHub: <a href="${resumeData.github}" target="_blank">View Profile</a>`;
        }

        // Specific company questions
        if (lowerQuestion.includes('curapatient') || lowerQuestion.includes('healthcare')) {
            const curaExp = resumeData.experience[0];
            return `<strong>${curaExp.title} at ${curaExp.company}</strong><br>
                    ${curaExp.location} | ${curaExp.period}<br><br>
                    Key achievements:<br>
                    ${curaExp.highlights.map(h => `• ${h}`).join('<br>')}`;
        }

        if (lowerQuestion.includes('pi pay') || lowerQuestion.includes('payment') || lowerQuestion.includes('fintech')) {
            const piExp = resumeData.experience[1];
            return `<strong>${piExp.title} at ${piExp.company}</strong><br>
                    ${piExp.location} | ${piExp.period}<br><br>
                    Key achievements:<br>
                    ${piExp.highlights.map(h => `• ${h}`).join('<br>')}`;
        }

        if (lowerQuestion.includes('agribuddy') || lowerQuestion.includes('agri')) {
            const agriExp = resumeData.experience[2];
            return `<strong>${agriExp.title} at ${agriExp.company}</strong><br>
                    ${agriExp.location} | ${agriExp.period}<br><br>
                    Key achievements:<br>
                    ${agriExp.highlights.map(h => `• ${h}`).join('<br>')}`;
        }

        if (lowerQuestion.includes('truemoney') || lowerQuestion.includes('true money')) {
            const trueExp = resumeData.experience[3];
            return `<strong>${trueExp.title} at ${trueExp.company}</strong><br>
                    ${trueExp.location} | ${trueExp.period}<br><br>
                    Key achievements:<br>
                    ${trueExp.highlights.map(h => `• ${h}`).join('<br>')}`;
        }

        // Programming language specific
        if (lowerQuestion.includes('java')) {
            return "Yes! She has extensive experience with Java, including Spring Boot, Spring MVC, Hibernate, JPA, and microservices architecture. She's used Java in multiple companies including CuraPatient and Pi Pay.";
        }

        if (lowerQuestion.includes('angular') || lowerQuestion.includes('frontend')) {
            return "She has strong frontend development skills with Angular, TypeScript, JavaScript, HTML5, and CSS3. She's built full-stack healthcare web applications using Angular at CuraPatient.";
        }

        if (lowerQuestion.includes('android') || lowerQuestion.includes('mobile')) {
            return "She has extensive Android development experience using both Java and Kotlin. She's worked on mobile apps at TrueMoney, Agribuddy, and Pi Pay, implementing features like KHQR payments, offline storage, and Bluetooth printing.";
        }

        if (lowerQuestion.includes('aws') || lowerQuestion.includes('cloud')) {
            return "She has experience with AWS services including S3, Lambda, RDS, Glue, and Step Functions. At CuraPatient, she designed and deployed an ETL data pipeline processing 500M+ records with 99.9% uptime.";
        }

        // Summary/about questions
        if (lowerQuestion.includes('about') || lowerQuestion.includes('who are you') || lowerQuestion.includes('summary')) {
            return `${resumeData.summary}<br><br>She's currently based in ${resumeData.location} and willing to relocate.`;
        }

        // Default response
        return `I can help you learn about Taingy's:<br><br>
                • Work experience and projects<br>
                • Technical skills and expertise<br>
                • Education background<br>
                • Contact information<br><br>
                Try asking something like "What's her experience?" or "What technologies does she know?"`;
    }

    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();

        if (message === '') return;

        // Add user message
        addMessage(message, true);
        chatbotInput.value = '';

        // Disable send button
        chatbotSend.disabled = true;

        // Show typing indicator
        const typingIndicator = showTypingIndicator();

        // Simulate thinking delay
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);
            const response = processQuestion(message);
            addMessage(response, false);
            chatbotSend.disabled = false;
        }, 800);
    }

    // Send button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }

    // Enter key to send
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Suggestion button clicks
    const suggestionButtons = document.querySelectorAll('.suggestion-btn');
    suggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            chatbotInput.value = question;
            sendMessage();
        });
    });
});
	