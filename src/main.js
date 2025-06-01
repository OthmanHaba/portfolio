import './style.css'
import Layout from "./Components/Layout.js";
import {store} from './store/store.js';
import {translations} from "./i18n.js"


const getNestedValue = (path, data) => path.split('.').reduce((obj, key) => obj?.[key], data);

window.t = function (key) {
    const locale = localStorage.getItem('locale') || 'en';
    return getNestedValue(key, translations[locale]) || key;
}

// init the app and fill it with the layout
document.querySelector('#app').innerHTML = Layout();


// Add event listener for navigation
document.addEventListener('DOMContentLoaded', () => {

    const locale = localStorage.getItem('locale') || 'en';

    store.setState({navigation: {current: 'home'}});

    document.body.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
});
