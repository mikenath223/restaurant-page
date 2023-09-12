class PageLoad {
    nav = document.createElement('nav');
    navBox = document.createElement('ul');
    navList1 = document.createElement('li');
    homeLink = document.createElement('a');
    navList2 = document.createElement('li');
    menuLink = document.createElement('a');
    navList3 = document.createElement('li');
    contactLink = document.createElement('a');

    constructor(name) {
        this.name = name;
    }

    createNavbar() {
        this.homeLink.textContent = this.name = "Home";
        this.menuLink.textContent = this.name = "Menu";
        this.contactLink.textContent = this.name = "Contact";
        this.navList1.appendChild(this.homeLink);
        this.navList2.appendChild(this.menuLink);
        this.navList3.appendChild(this.contactLink);
        this.navBox.appendChild(this.navList1);
        this.navBox.appendChild(this.navList2);
        this.navBox.appendChild(this.navList3);
        return this.nav.appendChild(this.navBox,);
        
    }

}
const nav = new PageLoad('Home').nav

const home = new PageLoad('Home').createNavbar([ 'Home',  'Menu',  'Contact']);

export {nav, home};