import { store } from '../../store/store.js';

export function ContactsView() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        const formData = new FormData(e.target);
        console.log('Form submitted:', Object.fromEntries(formData));
    };

    return `
        <div class="contacts-container">
            <section class="contact-header">
                <h1 class="section-title">Get in <span class="highlight">Touch</span></h1>
                <p class="contact-subtitle">Let's discuss your project or just have a conversation</p>
            </section>

            <div class="contact-grid">
                <section class="contact-info">
                    <h2>Contact Information</h2>
                    <div class="info-items">
                        <div class="info-item">
                            <i class="fas fa-envelope"></i>
                            <div class="info-content">
                                <h3>Email</h3>
                                <p>othman.hadi2002@gmail.com</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-phone"></i>
                            <div class="info-content">
                                <h3>Phone</h3>
                                <p>+218 945429014</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info-content">
                                <h3>Location</h3>
                                <p>Tripoli, Libya</p>
                            </div>
                        </div>
                    </div>

                    <div class="social-connections">
                        <h3>Connect with Me</h3>
                        <div class="social-icons">
                            <a href="#" class="social-icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="contact-form">
                    <h2>Send Message</h2>
                    <form id="contactForm" onsubmit="handleContactSubmit(event)">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required 
                                   placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required 
                                   placeholder="Your email">
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required 
                                   placeholder="Message subject">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required 
                                    placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </section>
            </div>
        </div>
    `;
}

// Add form handler to window object
window.handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    // Here you would typically send the data to a server
    alert('Message sent successfully!');
    e.target.reset();
}; 