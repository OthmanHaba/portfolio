import './style.css'
import Layout from "./Components/Layout.js";
import { store } from './store/store.js';

// Initialize the app
document.querySelector('#app').innerHTML = Layout();

// Add event listener for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with home view
    store.setState({ navigation: { current: 'home' } });
});
