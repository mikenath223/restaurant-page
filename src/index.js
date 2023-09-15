import './style.css';
import { nav, navBox, home, menuBar, contact } from './navbar';
import headline from './home';
import menu from './menu';

const restaurantPage = () => {

    const element = document.querySelector('#content');
    const main = document.createElement('main');
    
    navBox.appendChild(home);
    navBox.appendChild(menuBar);
    navBox.appendChild(contact);
    nav.appendChild(navBox);
    main.appendChild(headline);
    main.appendChild(menu);
    element.appendChild(nav);
    return element.appendChild(main);
}

export default restaurantPage();