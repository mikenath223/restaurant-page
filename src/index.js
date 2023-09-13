import './style.css';
import { nav, navBox, home, menu, contact } from './navbar';
const restaurantPage = () => {

    const element = document.querySelector('#content');
    
    navBox.appendChild(home);
    navBox.appendChild(menu);
    navBox.appendChild(contact);
    nav.appendChild(navBox);
    
    return element.appendChild(nav);

}

export default restaurantPage();