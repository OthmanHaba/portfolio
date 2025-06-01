import { store } from '../../store/store.js';

export function AboutView() {
    const State = store.getState();

    const data = [
        {
            label: "Frontend Development",
            skills: [
                { icon: "ts", title: "JavaScript/TypeScript" },
                { icon: "react", title: "React native" },
                { icon: "flutter", title: "Flutter" },
                { icon: "vue", title: "Vue.js" },
            ]
        },
        {
            label: "Backend Development",
            skills: [
                { icon: "php", title: "php" },
                { icon: "python", title: "python" },
                { icon: "golang", title: "go" },
                { icon: "rust", title: "Rust" },
                { icon: "laravel", title: "Laravel" },
                { icon: "postgres", title: "Mysql-Postgres" },
            ]
        },
        {
            label: "DevOps & Tools",
            skills: [
                { icon: "docker", title: "Docker" },
                { icon: "aws", title: "AWS" },
                { icon: "git", title: "Git" },
                { icon: "jenkins", title: "CI/CD" },
            ]
        },
        {
            label: "Other Skills",
            skills: [
                { icon: "flutter", title: "Mobile Development" },
                { icon: "kali", title: "Security" },
                { icon: "linux", title: "Linux" },
                { icon: "aws", title: "Architecture" },
            ]
        }
    ];
    const locale = localStorage.getItem('locale') || 'en';
    const interests = {
        en: [
            {
                icon: "fas fa-laptop-code",
                title: "Open Source",
                description: "Contributing to and maintaining open source projects"
            },
            {
                icon: "fas fa-chalkboard-teacher",
                title: "Mentoring",
                description: "Helping others grow in their tech journey"
            },
            {
                icon: "fas fa-brain",
                title: "AI & ML",
                description: "Exploring artificial intelligence applications"
            },
            {
                icon: "fas fa-book",
                title: "Learning",
                description: "Continuously expanding knowledge"
            }
        ],
        ar: [
            {
                icon: "fas fa-laptop-code",
                title: "المصدر المفتوح",
                description: "المساهمة في المشاريع مفتوحة المصدر وصيانتها"
            },
            {
                icon: "fas fa-chalkboard-teacher",
                title: "الإرشاد",
                description: "مساعدة الآخرين على النمو في مسيرتهم التقنية"
            },
            {
                icon: "fas fa-brain",
                title: "الذكاء الاصطناعي وتعلم الآلة",
                description: "استكشاف تطبيقات الذكاء الاصطناعي"
            },
            {
                icon: "fas fa-book",
                title: "التعلم",
                description: "توسيع المعرفة بشكل مستمر"
            }
        ]
    };


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
                    <!--<div class="skill-category">
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
                            <li>
                            <img src="https://skillicons.dev/icons?i=vue" alt="">
</i> php</li>
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
                    </div>-->
                    
                    ${data.map((category) => `
                        <div class="skill-category">
                            <h3>${category.label}</h3>
                            <ul class="skill-list">
                                ${category.skills.map((skill) => `
                                    <li>
                                         <img src="https://skillicons.dev/icons?i=${skill.icon}" alt="ico"> 
                                        ${skill.title}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                    
                    
                </div>
            </section>

            <section class="interests-section">
                <h2 class="section-title">${t('pages.about.personal')} <span class="highlight">${t('pages.about.interests')}</span></h2>
                <div class="interests-grid">
                    ${interests[locale].map(intrest => {
                        return `
                              <div class="interest-item">
                                    <i class="${intrest.icon}"></i>
                                    <h3>${intrest.title}</h3>
                                    <p>${intrest.description}</p>
                              </div>
                        `}).join('')} 
                    <!--<div class="interest-item">
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
                    </div>-->
                </div>
            </section>
        </div>
    `;
} 