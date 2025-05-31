import {store} from '../store/store.js';
import {HomeView} from './views/HomeView.js';
import {AboutView} from './views/AboutView.js';
import {ResumeView} from './views/ResumeView.js';
import {ContactsView} from './views/ContactsView.js';

export function MainContent() {
    const {navigation} = store.getState();

    const views = {
        home: HomeView,
        about: AboutView,
        resume: ResumeView,
        contacts: ContactsView
    };

    const sections = Object.keys(views);

    return `
        ${sections.map(section => {
        return `
                <section id="${section}" class="${navigation.current === section ? 'active' : ''}">
                    ${views[section]()}
                </section>
`;
    }).join('\n')}
`;
} 