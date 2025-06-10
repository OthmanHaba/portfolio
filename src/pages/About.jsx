import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  const skillsData =  [
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

  const currentInterests = interests[i18n.language] || interests.en;

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="section-title">
          {t('pages.about.about')} <span className="highlight">{t('pages.about.me')}</span>
        </h1>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              {t('pages.about.lead')}
            </p>
            <p className="description">
              {t('pages.about.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">
          {t('pages.about.technical')} <span className="highlight">{t('pages.about.skills')}</span>
        </h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.label}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <img 
                      src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                      alt={`${skill.title} icon`}
                    />
                    {skill.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="interests-section">
        <h2 className="section-title">
          {t('pages.about.personal')} <span className="highlight">{t('pages.about.interests')}</span>
        </h2>
        <div className="interests-grid">
          {currentInterests.map((interest, index) => (
            <div key={index} className="interest-item">
              <i className={interest.icon}></i>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 