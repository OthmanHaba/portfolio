import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contacts-container">
      <section className="contact-header">
        <h1 className="section-title">
          {t('pages.contacts.title')} <span className="highlight">{t('pages.contacts.highlight')}</span>
        </h1>
        <p className="contact-subtitle">{t('pages.contacts.subtitle')}</p>
      </section>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>{t('pages.contacts.info.title')}</h2>
          <div className="info-items">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div className="info-content">
                <h3>{t('pages.contacts.info.email.label')}</h3>
                <p>
                  <a href={`mailto:${t('pages.contacts.info.email.value')}`}>
                    {t('pages.contacts.info.email.value')}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div className="info-content">
                <h3>{t('pages.contacts.info.phone.label')}</h3>
                <p>
                  <a href={`tel:${t('pages.contacts.info.phone.value')}`}>
                    {t('pages.contacts.info.phone.value')}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="info-content">
                <h3>{t('pages.contacts.info.location.label')}</h3>
                <p>{t('pages.contacts.info.location.value')}</p>
              </div>
            </div>
          </div>

          <div className="social-connections">
            <h3>{t('pages.contacts.social.title')}</h3>
            <div className="social-icons">
              <a href="https://github.com/othman-haba" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/othman-haba-350b95262/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/TRAFALG73496987" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/oth_haba/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>{t('pages.contacts.form.title')}</h2>
          {isSubmitted && (
            <div className="success-message">
              {t('pages.contacts.form.success')}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('pages.contacts.form.fields.name.label')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('pages.contacts.form.fields.name.placeholder')}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('pages.contacts.form.fields.email.label')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('pages.contacts.form.fields.email.placeholder')}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('pages.contacts.form.fields.subject.label')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={t('pages.contacts.form.fields.subject.placeholder')}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('pages.contacts.form.fields.message.label')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('pages.contacts.form.fields.message.placeholder')}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              {t('pages.contacts.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts; 