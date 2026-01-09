// Wait for the HTML to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Handle "Book a Session" Button
    // 1. Handle "Book a Session" Button
const bookBtn = document.getElementById('bookBtn');
if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        // Find the contact section by its ID
        const contactSection = document.getElementById('contact');
        
        // Scroll to it smoothly
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
}

    // 2. Handle Contact Form Submission (Keep this separate!)
    // 2. Handle Contact Form Submission to WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the page from refreshing

        // 1. Get the values from the inputs
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // 2. Your WhatsApp Number (Country code + number, no '+' or spaces)
        const phoneNumber = "918921590943";

        // 3. Create the message string
        const fullMessage = `Hello Swasthi PsychCare, %0a%0a` +
                            `*Name:* ${name}%0a` +
                            `*Email:* ${email}%0a` +
                            `*Message:* ${message}`;

        // 4. Open WhatsApp in a new tab
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${fullMessage}`;
        window.open(whatsappUrl, '_blank');

        // 5. Optional: Reset the form
        contactForm.reset();
    });
}
    // 3. Handle clicking on service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.getAttribute('data-service');
            console.log("User clicked on: " + serviceName);
            
            // Toggle highlight: click once to highlight, again to remove
            if (card.style.backgroundColor === "rgb(240, 244, 232)") {
                card.style.backgroundColor = "white";
            } else {
                card.style.backgroundColor = "#f0f4e8"; 
            }
        });
    });
});