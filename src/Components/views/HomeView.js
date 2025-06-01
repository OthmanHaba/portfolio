import {store} from '../../store/store.js';

export function HomeView() {
    const {personalInfo, stats, gitJournal} = store.getState();

    const {pages: {home}} = store.getState();

    // const locale = localStorage.getItem('locale') || 'en';
    // const t = home[locale];

    const icons = [
        "laravel",
        "php",
        "go",
        "dotnet",
        "vue",
        "react",
        "mysql",
        "postgres",
        "redis",
        'python',
        'fastapi',
        'linux',
        'ubuntu',
        'docker',
        'js',
        'ts',
    ];

    return `
        <div class="home-container" id="home">
            <section class="hero-section">
                <div class="hero-content">
                    <div class="profile-section">
                        <div class="profile-image">
                            <img src="./profile-image.png" alt="Profile" />
                            <div class="profile-badge">
                                <span class="code-tag">&lt;/&gt;</span>
                            </div>
                        </div>
                        <div class="profile-info">
                            <span class="greeting">&lt;span&gt; ${t('pages.home.greeting')} &lt;/span&gt;</span>
                            <h1 class="title">
                                ${t('pages.home.role.title')} <span class="highlight">{${t('pages.home.role.role')}}</span>
                                ${t('pages.home.role.expertise')}
                            </h1>
                            <p class="description">
                                ${t('pages.home.description')}
                            </p>
                            <div class="tech-stack">
                                ${icons.map(icon => {
                                    return `
                                    <img src="https://skillicons.dev/icons?i=${icon}" alt="logo"/>
                                    `
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="stats-section">
                <div class="stat-item">
                    <h2>${stats.experience}</h2>
                    <p>${t('pages.home.stat.years')}</p>
                </div>
                <div class="stat-item">
                    <h2>${stats.projectsCompleted}</h2>
                    <p>${t('pages.home.stat.projects')}</p>
                </div>
                <div class="stat-item">
                    <h2>${stats.satisfiedClients}</h2>
                    <p>${t('pages.home.stat.clients')}</p>
                </div>
                <div class="stat-item">
                    <h2>${stats.awardsWinner}</h2>
                    <p>${t('pages.home.stat.awards')}</p>
                </div>
            </section>
        </div>
    `;
} 