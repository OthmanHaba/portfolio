export class Store {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = new Set();
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
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
    }
};

export const store = new Store(initialState); 