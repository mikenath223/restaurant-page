const Menu = (() => {

    const _menuBox = document.createElement('div');

    const _menus = [
        {
            // index: 0,
            image: '',
            heading: 'AGIDI PEPPER SOUP',
            description: 'A blend of spicy soup, delicious. it soothes sore throat.',
        },
        {
            // index: 1,
            image: '',
            heading: 'CATFISH PEPPER SOUP',
            description: 'Catfish is a healthy breed of fresh water pond.',
        },
        {
            // index: 2,
            image: '',
            heading: 'AGIDI PEPPER SOUP',
            description: 'Lo',
        },
        {
            // index: 3,
            image: '',
            heading: 'CATFISH PEPPER SOUP',
            description: 'llll',
        },
        {
            // index: 4,
            image: '',
            heading: 'AGIDI PEPPER SOUP',
            description: 'llll',
        },
        {
            // index: 5,
            image: '',
            heading: 'CATFISH PEPPER SOUP',
            description: 'llll',
        },
    ];

    const appendMenu = () => {
        _menus.map(menu => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            
            const menuDesc = document.createElement('div');
            menuDesc.setAttribute('class', 'menu-desc');
            
            const img = document.createElement('img');
            img.src = menu.image;

            const heading = document.createElement('h1');
            heading.textContent = menu.heading;
            
            const desc = document.createElement('p');
            desc.textContent = menu.description;

            menuDesc.appendChild(heading);
            menuDesc.appendChild(desc);

            card.appendChild(img);
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