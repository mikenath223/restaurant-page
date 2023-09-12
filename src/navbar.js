class PageLoad {
    nav = document.createElement('nav');
    navBox = document.createElement('ul');
    navList = document.createElement('li');
    navLink = document.createElement('a');
    constructor(name) {
        this.name = name;
    }

    createLink() {
        this.navLink.textContent = this.name;
        this.navLink.setAttribute('href', `#${this.name.toLowerCase()}`);
        this.navList.appendChild(this.navLink);
        return this.navBox.appendChild(this.navList);
    }
}
const nav = new PageLoad().nav;
const navBox = new PageLoad().navBox;

const home = new PageLoad('Home').createLink();
const menu = new PageLoad('Menu').createLink();
const contact = new PageLoad('Contact').createLink();
export {nav, navBox, home, menu, contact};