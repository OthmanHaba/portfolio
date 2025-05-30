import { store } from '../store/store.js';
import { HomeView } from './views/HomeView.js';
import { AboutView } from './views/AboutView.js';
import { ResumeView } from './views/ResumeView.js';
import { ContactsView } from './views/ContactsView.js';

export function MainContent() {
    const { navigation } = store.getState();
    
    const views = {
        home: HomeView,
        about: AboutView,
        resume: ResumeView,
        contacts: ContactsView
    };

    const currentView = views[navigation.current] || views.home;
    return currentView();
} 