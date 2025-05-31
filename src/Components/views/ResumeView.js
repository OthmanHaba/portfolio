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
                                <h3>Backend Developer</h3>
                                <p class="company">Presto ly</p>
                                <p class="period">2025 - Present</p>
                                <ul class="responsibilities">
                                    <li>Wroked on the Partner Applicatoin and the Driver Application Service</li>
                                </ul>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Mid-level Full Stack Enginner</h3>
                                <p class="company">Ebtekar LTD</p>
                                <p class="period">2023 - 2024</p>
                                <ul class="responsibilities">
                                    <li>Worked on a full solution service for the National Authority of corenal transportation including patint mangment midical centers mangment</li>
                                    <li>Contributed to a Mosahamat Software that is a platform for the ministry of external affairs</li>
                                    <li>Developed Twasol ai a full ai voice assisance for company products</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Intern Software Developer</h3>
                                <p class="company">Sahap co</p>
                                <p class="period">2023 - 2024</p>
                                <ul class="responsibilities">
                                    <li>ended my internship earler than 2 monthes </li>
                                    <li>implmented a train easy project a program help trennes for the co </li>
                                    <li>implmented a hr software including the attendance recored system and the payroll system</li>
                                </ul>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>Full stack .net Developer</h3>
                                <p class="company">Easy Solutions co.</p>
                                <p class="period">2021 - 2022</p>
                                <ul class="responsibilities">
                                    <li>Contributed to an ERP system for multiple companies, including:</li>
                                    <li>Implementing accounting services, such as invoicing and expense tracking</li>
                                    <li>Developing HR services, such as employee management and payroll processing</li>
                                    <li>Integrating the ERP system with various third-party services</li>
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
                                <h3>Bachelor's in Computer Engineering </h3>
                                <p class="company">Collage of Elctroniic technology Tripoli</p>
                                <p class="period">2021 - present</p>
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