document.addEventListener('DOMContentLoaded', () => {
    // Navigation - little boxes
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active links
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show which sections are active
            const target = link.getAttribute('href');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target.substring(1)) {
                    section.classList.add('active');
                }
            });
        });
    });

    
    // Scroll to top button functionality
    const topBtn = document.getElementById('topBtn');

    // Show button when scrolling down
    window.onscroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            topBtn.style.display = 'block';  // Show button when scrolled down 50px
        } else {
            topBtn.style.display = 'none';  // Hide button when scrolled back up
        }
    };

    // Smooth scroll to top when clicking the button
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Get the contact form and handle form submission
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent the form from submitting (staying on the same page)
        
        // msg after submission
        alert('Your message has been sent! Thank you!');
        
        // clear the form after submission
        form.reset();
    });


        const toggleBtn = document.getElementById('toggle-btn');
    
        toggleBtn.addEventListener('click', () => {
            // dark-mode 
            document.body.classList.toggle('dark-mode');
        });
    
});
