const Menu = (() => {

    const _menuBox = document.createElement('div');
    _menuBox.classList.add('cards');

    const _menus = [
        {
            image: '/src/images/cps.jpg',
            heading: 'CHICKEN PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: '/src/images/gmps.jpeg',
            heading: 'GOAT MEAT PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: '/src/images/eps.jpg',
            heading: 'EGUSI PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: '/src/images/ops.jpg',
            heading: 'OFFALS PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: '/src/images/clps.jpg',
            heading: 'COW LEG PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
        {
            image: '/src/images/cfps.jpg',
            heading: 'CATFISH PEPPER SOUP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        },
    ];

    const appendMenu = () => {
        _menus.map(menu => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            
            const menuDesc = document.createElement('div');
            menuDesc.setAttribute('class', 'menu-desc');
            
            const menuImg = document.createElement('div');
            menuImg.setAttribute('class', 'menu-img');
            
            const img = document.createElement('img');
            img.src = menu.image;

            const heading = document.createElement('h3');
            heading.textContent = menu.heading;
            
            const desc = document.createElement('p');
            desc.textContent = menu.description;
            menuImg.appendChild(img)
            menuDesc.appendChild(heading);
            menuDesc.appendChild(desc);

            card.appendChild(menuImg);
            card.appendChild(menuDesc);

            return _menuBox.appendChild(card);
        });

        return _menuBox;
    }

    return {
        appendMenu,
    }
})();

const menu =  Menu.appendMenu();

export default menu;