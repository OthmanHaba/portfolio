export class Store {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = new Set();
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = {...this.state, ...newState};
        this.notify();
    }

    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

// Initial state
const initialState = {
    personalInfo: {
        name: "Othman Haba",
        role: "Senior {Full Stack} Web & App Developer",
        description: "With expertise in cutting-edge technologies such as NodeJS, Vue ,PHP LARAVEL, and Laravel... I deliver web solutions that are both innovative and robust."
    },
    stats: {
        experience: "4",
        projectsCompleted: "10+",
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
    navigation: {
        current: "home"
    },
    navlinks: {
        ar: { // best practice not
            about: 'حولي',
            resume: 'السيرة الذاتية',
            contacts: 'اتصل بي'
        },
        en: {
            about: 'About Me',
            resume: 'Resume',
            contacts: 'Contacts'
        }
    },
    pages: {
        home: {
            ar: {
                greating: 'مرحبا، أنا ',
                title: {
                    part1: 'مطور ',
                    part2: 'تطبيقات ويب كاملة',
                    part3: 'تطبيقات ويب ومتجر',
                },
                description: 'مع خبرة في تكنولوجيات متقدمة مثل nodejs, vue ,php laravel, وlaravel... أقدم حلول ويب مبتكرة ومتينة.',
                stat : {
                    projects : "مشاريع مكتملة",
                    clients : "عملاء راضين",
                    awards : "جوائز فاز بها"
                },
                gitjournal: "مجلد جيت",
            },
            en: {
                greating: 'hey, i\'m ',
                title: {
                    part1: 'senior ',
                    part2: 'full stack developer',
                    part3: 'web & app developer',
                },
                description: 'with expertise in cutting-edge technologies such as nodejs, vue ,php laravel, and laravel... i deliver web solutions that are both innovative and robust.',
                stat : {
                    projects : "projects completed",
                    clients : "satisfied clients",
                    awards : "awards winner"
                },
                gitjournal: "git journaling",
            }
        }
    }
};

export const store = new Store(initialState); 