import { store } from '../../store/store.js';

export function ResumeView() {

    const locale = localStorage.getItem('locale') || 'en';
    
    
    const data = {
        en : [  
            {
                title: "Backend Developer",
                company: "Presto ly", 
                period: "2025 - " + t('pages.resume.present'),
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
        ],
        ar : [
            {
                title: "مطور الواجهة الخلفية",
                company: "بريستو ly",
                period: "2025 - " + t('pages.resume.present'),
                companyLogo: "/presto-logo.png",
                responsibilities: [
                    "عملت على تطبيق الشركاء وخدمة تطبيق السائق"
                ]
            },
            {
                title: "مهندس متكامل متوسط المستوى",
                company: "إبتكار ltd",
                companyLogo: "/ebtekar.png",
                period: "2023 - 2024",
                responsibilities: [
                    "عملت على خدمة حل متكامل للهيئة الوطنية لنقل القرنية بما في ذلك إدارة المرضى وإدارة المراكز الطبية",
                    "ساهمت في برنامج مساهمات وهو منصة لوزارة الشؤون الخارجية",
                    "طورت تواصل AI، مساعد صوتي ذكي كامل لمنتجات الشركة"
                ]
            },
            {
                title: "متدرب مطور برمجيات",
                company: "شركة سحاب co",
                companyLogo: '/sahab.png',
                period: "2023 - 2024",
                responsibilities: [
                    "أنهيت فترة التدريب قبل شهرين",
                    "نفذت مشروع Train Easy - برنامج لمساعدة المتدربين في الشركة",
                    "نفذت برنامج موارد بشرية يشمل نظام تسجيل الحضور ونظام الرواتب"
                ]
            },
            {
                title: "مطور .NET متكامل",
                company: "شركة ايزي سولوشن co",
                companyLogo: 'easy-solution.png',
                period: "2021 - 2022",
                responsibilities: [
                    "ساهمت في نظام ERP لشركات متعددة، بما في ذلك:",
                    "تنفيذ خدمات المحاسبة، مثل الفواتير وتتبع النفقات",
                    "تطوير خدمات الموارد البشرية، مثل إدارة الموظفين ومعالجة الرواتب",
                    "دمج نظام ERP مع خدمات مختلفة من جهات خارجية"
                ]
            }
        ]
    }

    return `
        <div class="resume-container">
            <section class="resume-header">
                <h1 class="section-title">${t('pages.resume.title')}</h1>
                <div class="resume-actions">
                    <a href="#" class="btn btn-primary">
                        <i class="fas fa-download"></i> ${t('pages.resume.downloadCV')}
                    </a>
                </div>
            </section>

            <div class="resume-grid">
                <section class="experience-section">
                    <h2 class="section-title">${t('pages.resume.workExperience')}</h2>
                    <div class="timeline">
                        ${data[locale].map((item) => {
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
                    <h2 class="section-title">${t('pages.resume.education')}</h2>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3>${t('pages.resume.education_details.degree')}</h3>
                                <p class="company">${t('pages.resume.education_details.university')}</p>
                                <p class="period">${t('pages.resume.education_details.period')}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="certifications-section">
                <h2 class="section-title">${t('pages.resume.certifications')}</h2>
                <div class="certifications-grid">
                    <div class="certification-item">
                        <i class="fas fa-certificate"></i>
                        <h3>${t('pages.resume.certifications_list.aws.title')}</h3>
                        <p>${t('pages.resume.certifications_list.aws.provider')}</p>
                    </div>
                    <div class="certification-item">
                        <i class="fas fa-certificate"></i>
                        <h3>${t('pages.resume.certifications_list.gcp.title')}</h3>
                        <p>${t('pages.resume.certifications_list.gcp.provider')}</p>
                    </div>
                    <div class="certification-item">
                        <i class="fas fa-certificate"></i>
                        <h3>${t('pages.resume.certifications_list.scrum.title')}</h3>
                        <p>${t('pages.resume.certifications_list.scrum.provider')}</p>
                    </div>
                </div>
            </section>
        </div>
    `;
} 