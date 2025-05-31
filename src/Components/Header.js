import { store } from '../store/store.js';

export function Header() {
    const { navigation } = store.getState();
    
    const handleNavClick = (page) => {
        store.setState({ navigation: { current: page } });
    };

    return `
        <nav class="nav-container">
            <div class="logo">
                <a href="/" class="logo-text">
                    <span class="code-tag">&lt;&gt;</span> Othman.Haba.dev
                </a>
            </div>
            <div class="nav-links">
                <a href="#about" class="nav-link ${navigation.current === 'about' ? 'active' : ''}" 
                   onclick="handleNavClick('about')">About Me</a>
                <a href="#resume" class="nav-link ${navigation.current === 'resume' ? 'active' : ''}"
                   onclick="handleNavClick('resume')">Resume</a>
                <a href="#contacts" class="nav-link ${navigation.current === 'contacts' ? 'active' : ''}"
                   onclick="handleNavClick('contacts')">Contacts</a>
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
            </div>
        </nav>
    `;
}

// Add click handler to window for navigation
window.handleNavClick = (page) => {
    store.setState({ navigation: { current: page } });
}; 