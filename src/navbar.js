class Navbar {

    nav = document.createElement('nav');
    navBox = document.createElement('ul');
    navList = document.createElement('li');
    navLink = document.createElement('a');

    constructor(name, clas) {
        this.name = name;
        this.clas = clas
    }

    createLink() {

        this.navLink.textContent = this.name;
        this.navLink.setAttribute('href', `#${this.clas}`);
        this.navLink.setAttribute('class', this.clas);
        this.navList.setAttribute('class', 'nav-btn')
        this.navList.appendChild(this.navLink);

        return this.navBox.appendChild(this.navList);

    }
}

const nav = new Navbar().nav;
const navBox = new Navbar().navBox;

const home = new Navbar('Home', 'home').createLink();
const menu = new Navbar('Menu', 'menu').createLink();
const contact = new Navbar('Contact', 'contact').createLink();

export {nav, navBox, home, menu, contact};