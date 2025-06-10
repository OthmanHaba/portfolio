import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { t } = useTranslation();
  const { state } = useAppContext();
  const { stats } = state;

  const icons = [
    "laravel",
    "php",
    "go",
    "dotnet",
    "vue",
    "react",
    "mysql",
    "postgres",
    "redis",
    'python',
    'fastapi',
    'linux',
    'ubuntu',
    'docker',
    'js',
    'ts',
  ];

  return (
    <div className="home-container" id="home">
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image">
              <img src="./profile-image.png" alt="Profile" />
              <div className="profile-badge">
                <span className="code-tag">&lt;/&gt;</span>
              </div>
            </div>
            <div className="profile-info">
              <span className="greeting">
                &lt;span&gt; {t('pages.home.greeting')} &lt;/span&gt;
              </span>
              <h1 className="title">
                {t('pages.home.role.title')} 
                <span className="highlight">
                  &#123;{t('pages.home.role.role')}&#125;
                </span>
                {t('pages.home.role.expertise')}
              </h1>
              <p className="description">
                {t('pages.home.description')}
              </p>
              <div className="tech-stack">
                {icons.map(icon => (
                  <img 
                    key={icon}
                    src={`https://skillicons.dev/icons?i=${icon}`} 
                    alt={`${icon} logo`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <h2>{stats.experience}</h2>
          <p>{t('pages.home.stat.years')}</p>
        </div>
        <div className="stat-item">
          <h2>{stats.projectsCompleted}</h2>
          <p>{t('pages.home.stat.projects')}</p>
        </div>
        <div className="stat-item">
          <h2>{stats.satisfiedClients}</h2>
          <p>{t('pages.home.stat.clients')}</p>
        </div>
        <div className="stat-item">
          <h2>{stats.awardsWinner}</h2>
          <p>{t('pages.home.stat.awards')}</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 