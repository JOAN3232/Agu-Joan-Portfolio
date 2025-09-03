 // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // Add hover effect for links and buttons
        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.border = '2px solid var(--primary-dark)';
                cursorFollower.style.opacity = '0';
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.border = '2px solid var(--primary)';
                cursorFollower.style.opacity = '1';
            });
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            // Navbar background change on scroll
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                backToTop.classList.add('show');
            } else {
                navbar.classList.remove('scrolled');
                backToTop.classList.remove('show');
            }

            // Active link on scroll
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-links');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Progress Bar Animation
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const animateProgressBars = () => {
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        };

        // Intersection Observer for Progress Bars
        const techStackSection = document.querySelector('.tech-stack');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(techStackSection);

        //Download Resume
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
const downloadResumeModalBtn = document.getElementById('downloadResumeModalBtn');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'AGU JOAN FRONT END DEVELOPER RESUME.pdf';
    link.download = 'AGU JOAN FRONT END DEVELOPER RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Resume downloaded successfully!');
});

downloadResumeModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'AGU JOAN FRONT END DEVELOPER RESUME.pdf';
    link.download = 'AGU JOAN FRONT END DEVELOPER RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Resume downloaded successfully!');
});

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
                submitBtn.style.backgroundColor = '#4CAF50';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });

        // Copy to clipboard functionality
        function copyToClipboard(text, tooltipId) {
            const tooltip = document.getElementById(tooltipId);
            
            // Create a temporary input element
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            
            // Select and copy the text
            tempInput.select();
            document.execCommand('copy');
            
            // Remove the temporary input
            document.body.removeChild(tempInput);
            
            // Update tooltip text
            tooltip.textContent = 'Copied!';
            
            // Reset tooltip text after 2 seconds
            setTimeout(() => {
                tooltip.textContent = 'Copy to clipboard';
            }, 2000);
        }
        
        // Email copy button
        document.getElementById('copy-email').addEventListener('click', () => {
            const email = document.getElementById('email-text').textContent;
            copyToClipboard(email, 'email-tooltip');
        });
        
        // Phone copy button
        document.getElementById('copy-phone').addEventListener('click', () => {
            const phone = document.getElementById('phone-text').textContent;
            copyToClipboard(phone, 'phone-tooltip');
        });

        // Initialize animations on page load
        window.addEventListener('load', () => {
            handleScroll();
        });

        // Typing Effect for Hero Tagline
const tagline = document.querySelector('.hero-tagline');
if (tagline) {
    const taglineText = tagline.textContent;
    tagline.textContent = '';

    function typeWriter(text, i, element) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, i, element), 100);
        }
    }

    setTimeout(() => {
        typeWriter(taglineText, 0, tagline);
    }, 1000);
}