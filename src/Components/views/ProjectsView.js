import { store } from '../../store/store.js';

export function ProjectsView() {
    const { projects } = store.getState();
    const locale = localStorage.getItem('locale') || 'en';
    const data = projects[locale];

    // Add this function to initialize carousel after the view is rendered
    const initCarousel = () => {
        const script = document.createElement('script');
        script.textContent = `
            function showImage(projectIndex, imageIndex) {
                const mainImage = document.querySelector(\`.project-main-image img[data-project="\${projectIndex}"]\`);
                const thumbnails = document.querySelectorAll(\`.thumbnail[data-project="\${projectIndex}"]\`);
                const newSrc = thumbnails[imageIndex].src;
                
                mainImage.src = newSrc;
                mainImage.dataset.index = imageIndex;
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                thumbnails[imageIndex].classList.add('active');
            }

            function nextImage(projectIndex) {
                const mainImage = document.querySelector(\`.project-main-image img[data-project="\${projectIndex}"]\`);
                const thumbnails = document.querySelectorAll(\`.thumbnail[data-project="\${projectIndex}"]\`);
                const currentIndex = parseInt(mainImage.dataset.index);
                const nextIndex = (currentIndex + 1) % thumbnails.length;
                showImage(projectIndex, nextIndex);
            }

            function prevImage(projectIndex) {
                const mainImage = document.querySelector(\`.project-main-image img[data-project="\${projectIndex}"]\`);
                const thumbnails = document.querySelectorAll(\`.thumbnail[data-project="\${projectIndex}"]\`);
                const currentIndex = parseInt(mainImage.dataset.index);
                const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
                showImage(projectIndex, prevIndex);
            }

            // Initialize click handlers for all projects
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
        `;
        document.body.appendChild(script);
    };

    // Call initCarousel after a short delay to ensure DOM is ready
    setTimeout(initCarousel, 100);

    return `
        <div class="projects-container" id="projects">
            <section class="projects-section">
                <h2 class="section-title">${t('pages.projects.title')}</h2>
                <div class="projects-grid">
                    ${data.map((project, projectIndex) => `
                        <div class="project-card">
                            <div class="project-images-gallery">
                                <div class="project-main-image">
                                    <img src="${project.images[0]}" alt="${project.title}" class="active-image" data-project="${projectIndex}" data-index="0">
                                    <div class="image-navigation">
                                        <button class="nav-btn prev" onclick="prevImage(${projectIndex})" aria-label="Previous image">
                                            <i class="fas fa-chevron-left"></i>
                                        </button>
                                        <button class="nav-btn next" onclick="nextImage(${projectIndex})" aria-label="Next image">
                                            <i class="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="project-thumbnails">
                                    ${project.images.map((image, index) => `
                                        <img src="${image}" 
                                             alt="${project.title} thumbnail" 
                                             class="thumbnail ${index === 0 ? 'active' : ''}"
                                             onclick="showImage(${projectIndex}, ${index})"
                                             data-project="${projectIndex}"
                                             data-index="${index}">
                                    `).join('')}
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