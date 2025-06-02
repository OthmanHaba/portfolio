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
    projects: {
        en: [
            {
                title: "Twasol AI",
                images: [
                    "/images/twasol/Screenshot 2025-06-02 at 1.45.39 AM.png",
                    "/images/twasol/Screenshot 2025-06-02 at 1.46.22 AM.png",
                    "/images/twasol/Screenshot 2025-06-02 at 1.46.38 AM.png",
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
                    "/images/twasol/Screenshot 2025-06-02 at 1.45.39 AM.png",
                    "/images/twasol/Screenshot 2025-06-02 at 1.46.22 AM.png",
                    "/images/twasol/Screenshot 2025-06-02 at 1.46.38 AM.png",
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

export const store = new Store(initialState); 