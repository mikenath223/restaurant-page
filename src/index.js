import './style.css';
import { nav, navBox, home, menu, contact } from './navbar';

const element = document.querySelector('#content');
// const nav = document.createElement('div');
// const navWrapper = document.createElement('ul');
// const navLink = document.createElement('a');

// navLink.innerText = "Home";
// navLink.setAttribute('href', '#')
// navWrapper.appendChild(navLink);
// nav.appendChild(navWrapper);
navBox.appendChild(home);
navBox.appendChild(menu);
navBox.appendChild(contact);
nav.appendChild(navBox);

element.appendChild(nav);

