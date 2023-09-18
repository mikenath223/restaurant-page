const Menu = (() => {

    const _menuBox = document.createElement('div');
    _menuBox.classList.add('cards');

    const _menus = [
        {
            image: '/src/images1.jpg',
            heading: 'CHICKEN PEPPER SOUP',
            description: 'A blend of spicy soup, delicious. it soothes sore throat.',
        },
        {
            image: '/src/images1.jpg',
            heading: 'GOAT MEAT PEPPER SOUP',
            description: 'Catfish is a healthy breed of fresh water pond.',
        },
        {
            image: '/src/images1.jpg',
            heading: 'EGUSI PEPPER SOUP',
            description: 'Lo',
        },
        {
            image: '/src/images1.jpg',
            heading: 'OFFALS PEPPER SOUP',
            description: 'llll',
        },
        {
            image: '/src/images1.jpg',
            heading: 'COW LEG PEPPER SOUP',
            description: 'llll',
        },
        {
            image: '/src/images1.jpg',
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