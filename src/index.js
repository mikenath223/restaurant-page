import './style.css';
import { nav, navBox, home, menu, contact } from './navbar';
import headline from './home';
import menuPage from './menu';
import contactPage from './contact';

const restaurantPage = () => {

    const element = document.querySelector('#content');
    const main = document.createElement('main');
    
    navBox.appendChild(home);
    navBox.appendChild(menu);
    navBox.appendChild(contact);
    nav.appendChild(navBox);
    main.appendChild(headline);
    main.appendChild(menuPage);
    main.appendChild(contactPage);
    element.appendChild(nav);
    return element.appendChild(main);
}

export default restaurantPage();