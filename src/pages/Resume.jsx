import React from 'react';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
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
  };

  // Get the appropriate data based on current language
  const experienceData = data[currentLanguage] || data.en;

  return (
    <div className="resume-container">

      <section className="participation-section">
        <h2 className="section-title">
          <i className="fas fa-users"></i>
          Participations
        </h2>
        <div className="participation-item">
          <div className="participation-image">
            <img src="/participation-image.png" alt="Participation" className="participation-img" />
          </div>
          <div className="participation-content">
            <h3 className="participation-title">Participation in the Alesco Global Youth Summit</h3>
            <h4 className="participation-project">Alesco Global Youth Summit</h4>
            <p className="participation-description">I participated in the Alesco Global Youth Summit in December 2024. I was able to meet with other young people from around the world and learn about their cultures and experiences.</p>
          </div>
        </div>
        <div className="participation-item">
          <div className="participation-content">
            <h3 className="participation-title">OCR Engine for Historical Manuscripts</h3>
            <h4 className="participation-project">Top 10 Project Achievement</h4>
            <p className="participation-description">I managed to score one of the top 10 projects with my OCR engine designed to read and translate historical manuscripts.</p>
          </div>
        </div>
      </section>
      <section className="resume-header">
        <h1 className="section-title">{t('pages.resume.title')}</h1>
        <button className="btn btn-primary download-btn">
          <i className="fas fa-download"></i>
          {t('pages.resume.downloadCV')}
        </button>
      </section>

      <div className="resume-grid">
        <div className="main-content">
          <section className="experience-section">
            <h2 className="section-title">
              <i className="fas fa-briefcase"></i>
              {t('pages.resume.workExperience')}
            </h2>
            <div className="timeline">
              {experienceData.map((experience, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{experience.title}</h3>
                    <div className="company-info">
                      <span className="company">{experience.company}</span>
                      {experience.companyLogo && (
                        <img 
                          src={experience.companyLogo} 
                          alt={`${experience.company} logo`} 
                          className="company-logo"
                        />
                      )}
                    </div>
                    <span className="period">{experience.period}</span>
                    <p className="description">{t('pages.resume.responsibilities')}</p>
                    <ul className="responsibilities">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="sidebar">
          <section className="education-section">
            <h2 className="section-title">
              <i className="fas fa-graduation-cap"></i>
              {t('pages.resume.education')}
            </h2>
            <div className="education-item">
              <h3>{t('pages.resume.education_details.degree')}</h3>
              <span className="institution">{t('pages.resume.education_details.university')}</span>
              <span className="period">{t('pages.resume.education_details.period')}</span>
            </div>
          </section>

          <section className="certifications-section">
            <h2 className="section-title">
              <i className="fas fa-certificate"></i>
              {t('pages.resume.certifications')}
            </h2>
            <div className="certifications-grid">
              <div className="certification-item">
                <i className="fab fa-aws"></i>
                <div>
                  <h3>{t('pages.resume.certifications_list.aws.title')}</h3>
                  <span className="provider">{t('pages.resume.certifications_list.aws.provider')}</span>
                </div>
              </div>
              <div className="certification-item">
                <i className="fab fa-google"></i>
                <div>
                  <h3>{t('pages.resume.certifications_list.gcp.title')}</h3>
                  <span className="provider">{t('pages.resume.certifications_list.gcp.provider')}</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      
    </div>
  );
};

export default Resume; 