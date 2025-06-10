import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  personalInfo: {
    name: "Othman Haba",
    role: "Senior {Full Stack} Web & App Developer",
    description: "With expertise in cutting-edge technologies such as NodeJS, Vue ,PHP LARAVEL, and Laravel... I deliver web solutions that are both innovative and robust."
  },
  stats: {
    experience: "4",
    projectsCompleted: "20+",
    satisfiedClients: "30+",
    awardsWinner: "1+"
  },
  gitJournal: [
    {
      date: "25 Jul",
      project: "twasil ai - AI-powered personal voice assetance assistant"
    },
    {
      date: "5 May",
      project: "Custom Laravel Starter kit - A starter kit for Laravel projects with roles and permissions and user mangment out of the box"
    }
  ],
  projects: {
    en: [
      {
        title: "Twasol AI",
        images: [
          "/images/twasol/Screenshot 2025-06-02 at 1.45.39 AM.png",
          "/images/twasol/Screenshot 2025-06-02 at 1.46.22 AM.png",
          "/images/twasol/Screenshot 2025-06-02 at 1.46.38 AM.png",
        ],
        description: "A collaborative task management system with real-time updates, team chat, and project analytics.",
        technologies: ["Vue.js", "Laravel", "Mysql", "Docker"],
        isNda: true,
        link: "#"
      },
      {
        title: "Mishwar driver-share application",
        images: [
          "/images/mishwar/photo_2025-06-02 01.58.15.jpeg",
          "/images/mishwar/photo_2025-06-02 01.58.16.jpeg",
          "/images/mishwar/photo_2025-06-02 01.58.17.jpeg",
          "/images/mishwar/photo_2025-06-02 01.58.18.jpeg",
        ],
        description: "A collaborative task management system with real-time updates, team chat, and project analytics.",
        technologies: ["Flutter", "Laravel", "Firebase","postgres"],
        isNda: true,
        link: "#"
      }
    ],
    ar: [
      {
        title: "Twasol AI",
        images: [
          "/images/twasol/Screenshot 2025-06-02 at 1.45.39 AM.png",
          "/images/twasol/Screenshot 2025-06-02 at 1.46.22 AM.png",
          "/images/twasol/Screenshot 2025-06-02 at 1.46.38 AM.png",
        ],
        description: "منصة التجارة الإلكترونية الكاملة المبنية على لارافيل وفيو جيت. تشمل إدارة المنتجات ووظيفة العربة، والدمج مع الدفع.",
        technologies: ["لارافيل", "فيو جيت", "ميسك", "ريديس"],
        link: "https://example.com/ecommerce"
      },
      {
        title: "تطبيق مشوار لمشاركة السائقين",
        images: [
          "/images/mishwar/photo_2025-06-02 01.58.15.jpeg",
          "/images/mishwar/photo_2025-06-02 01.58.16.jpeg",
          "/images/mishwar/photo_2025-06-02 01.58.17.jpeg",
          "/images/mishwar/photo_2025-06-02 01.58.18.jpeg",
        ],
        description: "A collaborative task management system with real-time updates, team chat, and project analytics.",
        technologies: ["Flutter", "Laravel", "Firebase","postgres"],
        isNda: true,
        link: "#"
      }
    ]
  }
};

// Action types
const actionTypes = {
  UPDATE_PERSONAL_INFO: 'UPDATE_PERSONAL_INFO',
  UPDATE_STATS: 'UPDATE_STATS',
  ADD_GIT_JOURNAL_ENTRY: 'ADD_GIT_JOURNAL_ENTRY',
  UPDATE_PROJECTS: 'UPDATE_PROJECTS'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload }
      };
    case actionTypes.UPDATE_STATS:
      return {
        ...state,
        stats: { ...state.stats, ...action.payload }
      };
    case actionTypes.ADD_GIT_JOURNAL_ENTRY:
      return {
        ...state,
        gitJournal: [action.payload, ...state.gitJournal]
      };
    case actionTypes.UPDATE_PROJECTS:
      return {
        ...state,
        projects: { ...state.projects, ...action.payload }
      };
    default:
      return state;
  }
};

// Context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
    actions: {
      updatePersonalInfo: (info) => dispatch({ type: actionTypes.UPDATE_PERSONAL_INFO, payload: info }),
      updateStats: (stats) => dispatch({ type: actionTypes.UPDATE_STATS, payload: stats }),
      addGitJournalEntry: (entry) => dispatch({ type: actionTypes.ADD_GIT_JOURNAL_ENTRY, payload: entry }),
      updateProjects: (projects) => dispatch({ type: actionTypes.UPDATE_PROJECTS, payload: projects })
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 