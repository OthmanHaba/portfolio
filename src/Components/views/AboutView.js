import { store } from '../../store/store.js';

export function AboutView() {
    const State = store.getState();
    return `
        <div class="about-container">
            <section class="about-hero">
                <h1 class="section-title">${t('pages.about.about')} <span class="highlight">${t('pages.about.me')}</span></h1>
                <div class="about-content">
                    <div class="about-text">
                        <p class="lead">
                            ${t('pages.about.lead')}
                        </p>
                        <p class="description">
                            ${t('pages.about.description')}
                        </p>
                    </div>
                </div>
            </section>

            <section class="skills-section">
                <h2 class="section-title">${t('pages.about.technical')} <span class="highlight">${t('pages.about.skills')}</span></h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Frontend Development</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-js"></i> JavaScript/TypeScript</li>
                            <li><i class="fab fa-react"></i> React native</li>
                            <li><i class="fab fa-vuejs"></i> React </li>
                            <li><i class="fab fa-vuejs"></i> Vue.js</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Backend Development</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-php"></i> php</li>
                            <li><i class="fab fa-python"></i> python</li>
                            <li><i class="fab fa-golang"></i> go</li>
                            <li><i class="fab fa-laravel"></i>Laravel</li>
                            <li><i class="fas fa-server"></i>RESTful APIs</li>
                            <li><i class="fas fa-database"></i>Mysql-Postgres</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>DevOps & Tools</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-docker"></i>Docker</li>
                            <li><i class="fab fa-aws"></i>AWS</li>
                            <li><i class="fab fa-git-alt"></i>Git</li>
                            <li><i class="fab fa-jenkins"></i>CI/CD</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Other Skills</h3>
                        <ul class="skill-list">
                            <li><i class="fas fa-mobile-alt"></i> Mobile Development</li>
                            <li><i class="fas fa-shield-alt"></i> Security</li>
                            <li><i class="fas fa-code-branch"></i> Architecture</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="interests-section">
                <h2 class="section-title">${t('pages.about.personal')} <span class="highlight">${t('pages.about.interests')}</span></h2>
                <div class="interests-grid">
                    <div class="interest-item">
                        <i class="fas fa-laptop-code"></i>
                        <h3>Open Source</h3>
                        <p>Contributing to and maintaining open source projects</p>
                    </div>
                    <div class="interest-item">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <h3>Mentoring</h3>
                        <p>Helping others grow in their tech journey</p>
                    </div>
                    <div class="interest-item">
                        <i class="fas fa-brain"></i>
                        <h3>AI & ML</h3>
                        <p>Exploring artificial intelligence applications</p>
                    </div>
                    <div class="interest-item">
                        <i class="fas fa-book"></i>
                        <h3>Learning</h3>
                        <p>Continuously expanding knowledge</p>
                    </div>
                </div>
            </section>
        </div>
    `;
} 