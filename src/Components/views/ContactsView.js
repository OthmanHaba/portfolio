import { store } from '../../store/store.js';

export function ContactsView() {
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Form submitted:', Object.fromEntries(formData));
    };

    return `
        <div class="contacts-container">
            <section class="contact-header">
                <h1 class="section-title">${t('pages.contacts.title')} <span class="highlight">${t('pages.contacts.highlight')}</span></h1>
                <p class="contact-subtitle">${t('pages.contacts.subtitle')}</p>
            </section>

            <div class="contact-grid">
                <section class="contact-info">
                    <h2>${t('pages.contacts.info.title')}</h2>
                    <div class="info-items">
                        <div class="info-item">
                            <i class="fas fa-envelope"></i>
                            <div class="info-content">
                                <h3>${t('pages.contacts.info.email.label')}</h3>
                                <p>${t('pages.contacts.info.email.value')}</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-phone"></i>
                            <div class="info-content">
                                <h3>${t('pages.contacts.info.phone.label')}</h3>
                                <p>${t('pages.contacts.info.phone.value')}</p>
                            </div>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info-content">
                                <h3>${t('pages.contacts.info.location.label')}</h3>
                                <p>${t('pages.contacts.info.location.value')}</p>
                            </div>
                        </div>
                    </div>

                    <div class="social-connections">
                        <h3>${t('pages.contacts.social.title')}</h3>
                        <div class="social-icons">
                            <a href="https://x.com/TRAFALG73496987" target="_blank" class="social-link">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/othman-haba-350b95262/" target="_blank" class="social-link">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            
                            <a href="https://www.instagram.com/oth_haba/" target="_blank" class="social-link">
                                <i class="fab fa-instagram"></i>
                            </a>
                            
                            <a href="https://www.facebook.com/othman.elhadi.712" target="_blank" class="social-link">
                                <i class="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </section>

                <section class="contact-form">
                    <h2>${t('pages.contacts.form.title')}</h2>
                    <form id="contactForm" onsubmit="handleContactSubmit(event)">
                        <div class="form-group">
                            <label for="name">${t('pages.contacts.form.fields.name.label')}</label>
                            <input type="text" id="name" name="name" required 
                                   placeholder="${t('pages.contacts.form.fields.name.placeholder')}">
                        </div>
                        <div class="form-group">
                            <label for="email">${t('pages.contacts.form.fields.email.label')}</label>
                            <input type="email" id="email" name="email" required 
                                   placeholder="${t('pages.contacts.form.fields.email.placeholder')}">
                        </div>
                        <div class="form-group">
                            <label for="subject">${t('pages.contacts.form.fields.subject.label')}</label>
                            <input type="text" id="subject" name="subject" required 
                                   placeholder="${t('pages.contacts.form.fields.subject.placeholder')}">
                        </div>
                        <div class="form-group">
                            <label for="message">${t('pages.contacts.form.fields.message.label')}</label>
                            <textarea id="message" name="message" required 
                                    placeholder="${t('pages.contacts.form.fields.message.placeholder')}"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i> ${t('pages.contacts.form.submit')}
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
    alert(t('pages.contacts.form.success'));
    e.target.reset();
}; 