import { store } from '../../store/store.js';

export function AboutView() {
    const { personalInfo } = store.getState();

    return `
        <div class="about-container">
            <section class="about-hero">
                <h1 class="section-title">About <span class="highlight">Me</span></h1>
                <div class="about-content">
                    <div class="about-text">
                        <p class="lead">
                            Passionate about creating elegant solutions to complex problems, I bring ideas to life through code.
                        </p>
                        <p class="description">
                            With over ${personalInfo.stats?.experience || "12+"} years of experience in full-stack development,
                            I've had the privilege of working with cutting-edge technologies and amazing teams worldwide.
                            My approach combines technical expertise with creative problem-solving to deliver exceptional results.
                        </p>
                    </div>
                </div>
            </section>

            <section class="skills-section">
                <h2 class="section-title">Technical <span class="highlight">Skills</span></h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Frontend Development</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-react"></i> React.js</li>
                            <li><i class="fab fa-angular"></i> Angular</li>
                            <li><i class="fab fa-vuejs"></i> Vue.js</li>
                            <li><i class="fab fa-js"></i> JavaScript/TypeScript</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Backend Development</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-node-js"></i> Node.js</li>
                            <li><i class="fab fa-php"></i> Laravel</li>
                            <li><i class="fas fa-database"></i> SQL/NoSQL</li>
                            <li><i class="fas fa-server"></i> RESTful APIs</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>DevOps & Tools</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-docker"></i> Docker</li>
                            <li><i class="fab fa-aws"></i> AWS</li>
                            <li><i class="fab fa-git-alt"></i> Git</li>
                            <li><i class="fab fa-jenkins"></i> CI/CD</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Other Skills</h3>
                        <ul class="skill-list">
                            <li><i class="fas fa-mobile-alt"></i> Mobile Development</li>
                            <li><i class="fas fa-paint-brush"></i> UI/UX Design</li>
                            <li><i class="fas fa-shield-alt"></i> Security</li>
                            <li><i class="fas fa-code-branch"></i> Architecture</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="interests-section">
                <h2 class="section-title">Personal <span class="highlight">Interests</span></h2>
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