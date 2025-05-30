import { store } from '../../store/store.js';

export function ResumeView() {
    return `
        <div class="resume-container">
            <section class="resume-header">
                <h1 class="section-title">My <span class="highlight">Resume</span></h1>
                <div class="resume-actions">
                    <a href="#" class="btn btn-primary">
                        <i class="fas fa-download"></i> Download CV
                    </a>
                </div>
            </section>

            <div class="resume-grid">
                <section class="experience-section">
                    <h2 class="section-title">Work Experience</h2>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Senior Full Stack Developer</h3>
                                <p class="company">Tech Innovations Inc.</p>
                                <p class="period">2020 - Present</p>
                                <ul class="responsibilities">
                                    <li>Led development of enterprise-scale applications</li>
                                    <li>Mentored junior developers and conducted code reviews</li>
                                    <li>Implemented CI/CD pipelines and DevOps practices</li>
                                </ul>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Full Stack Developer</h3>
                                <p class="company">Digital Solutions Ltd</p>
                                <p class="period">2017 - 2020</p>
                                <ul class="responsibilities">
                                    <li>Developed and maintained multiple client projects</li>
                                    <li>Implemented responsive web applications</li>
                                    <li>Optimized application performance and security</li>
                                </ul>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Frontend Developer</h3>
                                <p class="company">WebCraft Studios</p>
                                <p class="period">2015 - 2017</p>
                                <ul class="responsibilities">
                                    <li>Built interactive user interfaces</li>
                                    <li>Collaborated with design team</li>
                                    <li>Implemented responsive layouts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="education-section">
                    <h2 class="section-title">Education</h2>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Master's in Computer Science</h3>
                                <p class="company">Tech University</p>
                                <p class="period">2013 - 2015</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Bachelor's in Software Engineering</h3>
                                <p class="company">State University</p>
                                <p class="period">2009 - 2013</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="certifications-section">
                <h2 class="section-title">Certifications</h2>
                <div class="certifications-grid">
                    <div class="certification-item">
                        <i class="fas fa-certificate"></i>
                        <h3>AWS Certified Solutions Architect</h3>
                        <p>Amazon Web Services</p>
                    </div>
                    <div class="certification-item">
                        <i class="fas fa-certificate"></i>
                        <h3>Google Cloud Professional</h3>
                        <p>Google Cloud Platform</p>
                    </div>
                    <div class="certification-item">
                        <i class="fas fa-certificate"></i>
                        <h3>Certified Scrum Master</h3>
                        <p>Scrum Alliance</p>
                    </div>
                </div>
            </section>
        </div>
    `;
} 