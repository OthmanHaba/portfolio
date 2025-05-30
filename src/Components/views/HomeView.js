import { store } from '../../store/store.js';

export function HomeView() {
    const { personalInfo, stats, gitJournal } = store.getState();

    return `
        <div class="home-container">
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
                            <span class="greeting">&lt;span&gt; Hey, I'm ${personalInfo.name} &lt;/span&gt;</span>
                            <h1 class="title">
                                Senior <span class="highlight">{Full Stack Developer}</span>
                                Web & App Developer_
                            </h1>
                            <p class="description">
                                ${personalInfo.description}
                            </p>
                            <div class="tech-stack">
                                <img src="https://skillicons.dev/icons?i=laravel" />
                                <img src="https://skillicons.dev/icons?i=php" />
                                <img src="https://skillicons.dev/icons?i=go" />
                                <img src="https://skillicons.dev/icons?i=dotnet" />
                                <img src="https://skillicons.dev/icons?i=vue" />
                                <img src="https://skillicons.dev/icons?i=flutter" />
                                <img src="https://skillicons.dev/icons?i=react" />
                                <img src="https://skillicons.dev/icons?i=mysql" />
                                <img src="https://skillicons.dev/icons?i=postgres" />
                                <img src="https://skillicons.dev/icons?i=redis" />
                                <img src="https://skillicons.dev/icons?i=ai" />
                                <img src="https://skillicons.dev/icons?i=ml" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="stats-section">
                <div class="stat-item">
                    <h2>${stats.experience}</h2>
                    <p>Years Experience</p>
                </div>
                <div class="stat-item">
                    <h2>${stats.projectsCompleted}</h2>
                    <p>Projects Completed</p>
                </div>
                <div class="stat-item">
                    <h2>${stats.satisfiedClients}</h2>
                    <p>Satisfied Clients</p>
                </div>
                <div class="stat-item">
                    <h2>${stats.awardsWinner}</h2>
                    <p>Awards Winner</p>
                </div>
            </section>

            <section class="git-journal">
                <h3>Git Journaling</h3>
                <div class="journal-entries">
                    ${gitJournal.map(entry => `
                        <div class="journal-entry">
                            <span class="date">${entry.date}:</span>
                            <span class="project">${entry.project}</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
} 