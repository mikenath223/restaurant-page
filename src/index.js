import './style.css';
import { nav, navBox, home, menu, contact } from './navbar';
const restaurantPage = () => {

    const element = document.querySelector('#content');
    const main = document.createElement('main');
    
    navBox.appendChild(home);
    navBox.appendChild(menu);
    navBox.appendChild(contact);
    nav.appendChild(navBox);
    element.appendChild(nav)
    return element.appendChild(main)
}

export default restaurantPage();