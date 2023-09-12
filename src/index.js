import './style.css';
import { nav, navBox, home, menu, contact } from './navbar';

const element = document.querySelector('#content');

navBox.appendChild(home);
navBox.appendChild(menu);
navBox.appendChild(contact);
nav.appendChild(navBox);

element.appendChild(nav);

