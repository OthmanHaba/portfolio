import { store } from '../../store/store.js';

export function ResumeView() {
    const data = [
        {
            title: "Backend Developer",
            company: "Presto ly",
            period: "2025 - Present",
            companyLogo: "/presto-logo.png",
            responsibilities: [
                "Worked on the Partner Application and the Driver Application Service"
            ]
        },
        {
            title: "Mid-level Full Stack Engineer",
            company: "Ebtekar LTD",
            companyLogo: "/ebtekar.png",
            period: "2023 - 2024",
            responsibilities: [
                "Worked on a full solution service for the National Authority of corneal transportation including patient management and medical centers management",
                "Contributed to a Mosahamat Software that is a platform for the Ministry of External Affairs",
                "Developed Twasol AI, a full AI voice assistant for company products"
            ]
        },
        {
            title: "Intern Software Developer",
            company: "Sahap co",
            companyLogo: '/sahab.png',
            period: "2023 - 2024",
            responsibilities: [
                "Ended my internship earlier than 2 months",
                "Implemented a Train Easy project — a program to help trainees in the company",
                "Implemented HR software including attendance record system and payroll system"
            ]
        },
        {
            title: "Full stack .NET Developer",
            company: "Easy Solutions co.",
            companyLogo: 'easy-solution.png',
            period: "2021 - 2022",
            responsibilities: [
                "Contributed to an ERP system for multiple companies, including:",
                "Implementing accounting services, such as invoicing and expense tracking",
                "Developing HR services, such as employee management and payroll processing",
                "Integrating the ERP system with various third-party services"
            ]
        }
    ];

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
                        ${data.map((item) => {
                            return `
                                  <div class="timeline-item">
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-content">
                                      <h3>${item.title}</h3>
                                      <div class="company-info">
                                        <img src="${item.companyLogo}" alt="logo" >
                                        <p class="company">${item.company}</p>
                                      </div>
                                      <p class="period">${item.period}</p>
                                      <ul class="responsibilities">
                                        ${item.responsibilities
                                            .map((responsibility) => `<li>${responsibility}</li>`)
                                            .join("")}
                                      </ul>
                                    </div>
                                  </div>
                    `;}).join("")}
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