import './style.css';
import {nav, home} from './load';

const element = document.querySelector('#content');
// const nav = document.createElement('div');
// const navWrapper = document.createElement('ul');
// const navLink = document.createElement('a');

// navLink.innerText = "Home";
// navLink.setAttribute('href', '#')
// navWrapper.appendChild(navLink);
// nav.appendChild(navWrapper);
nav.appendChild(home)

element.appendChild(nav);

