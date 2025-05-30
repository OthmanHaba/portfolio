import { store } from '../store/store.js';
import { Header } from './Header.js';
import { MainContent } from './MainContent.js';
// import { Footer } from './Footer.js';

export default function Layout() {
    const render = () => {
        const app = document.querySelector('#app');
        if (app) {
            app.innerHTML = `
                <div class="layout">
                    <header class="header">
                        ${Header()}
                    </header>
                    <main class="main-content">
                        ${MainContent()}
                    </main>
                    <footer class="footer">
                    </footer>
                </div>
            `;
        }
    };

    // Subscribe to store changes
    store.subscribe(render);

    // Initial render
    return render();
}