import { store } from '../../store/store.js';

export function ProjectsView() {
    const { projects } = store.getState();
    const locale = localStorage.getItem('locale') || 'en';
    const data = projects[locale];

    return `
        <div class="projects-container" id="projects">
            <section class="projects-section">
                <h2 class="section-title">${t('pages.projects.title')}</h2>
                <div class="projects-grid">
                    ${data.map(project => `
                        <div class="project-card">
                            <div class="project-image">
                                <img src="${project.image}" alt="${project.title}" />
                                <div class="project-overlay">
                                    <a href="${project.link}" class="btn btn-primary" target="_blank">
                                        <i class="fas fa-external-link-alt"></i> ${t('pages.projects.viewProject')}
                                    </a>
                                </div>
                            </div>
                            <div class="project-content">
                                <h3 class="project-title">${project.title}</h3>
                                <p class="project-description">${project.description}</p>
                                <div class="project-tech">
                                    ${project.technologies.map(tech => `
                                        <span class="tech-tag">${tech}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
} 