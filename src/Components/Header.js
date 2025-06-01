import { store } from '../store/store.js';

export function Header() {
    const { navigation } = store.getState();
    
    const handleNavClick = (page) => {
        store.setState({ navigation: { current: page } });
    };

    const locale = localStorage.getItem('locale') || 'en';

    //wrong
    // const {navlinks} = store.getState();
    // const t = navlinks[locale];

    return `
        <nav class="nav-container">
            <div class="logo">
                <a href="/#home" class="logo-text" onclick="handleNavClick('home')">
                    <span class="code-tag">&lt;&gt;</span> Othman.Haba.dev
                </a>
            </div>
            <div class="nav-links">
                <a href="#about" class="nav-link ${navigation.current === 'about' ? 'active' : ''}" 
                   onclick="handleNavClick('about')">${t('nav.about')}</a>
                <a href="#resume" class="nav-link ${navigation.current === 'resume' ? 'active' : ''}"
                   onclick="handleNavClick('resume')">${t('nav.resume')}</a>
                <a href="#contacts" class="nav-link ${navigation.current === 'contacts' ? 'active' : ''}"
                   onclick="handleNavClick('contacts')">${t('nav.contacts')}</a>
            </div>
            <div class="social-links">
                <a href="#" class="social-link">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fab fa-facebook"></i>
                </a>
                
                <button class="btn btn-primary" onclick="toggleLocale()">
                    ${localStorage.getItem('locale') === 'ar' ? 'English' : 'العربية'}
                </button>
      
            </div>
        </nav>
    `;
}

// Add click handler to window for navigation
window.handleNavClick = (page) => {
    store.setState({ navigation: { current: page } });
};

window.toggleLocale = () => {
    const currentLocale = localStorage.getItem('locale') || 'en';
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    localStorage.setItem('locale', newLocale);
    window.location.reload();
};