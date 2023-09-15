const Menu = (() => {

    const _menuBox = document.createElement('div');

    const _menus = [
        {
            image: '',
            heading: '',
            description: '',
        },
        {
            image: '',
            heading: '',
            description: '',
        },
        {
            image: '',
            heading: '',
            description: '',
        },
        {
            image: '',
            heading: '',
            description: '',
        },
        {
            image: '',
            heading: '',
            description: '',
        },
        {
            image: '',
            heading: '',
            description: '',
        },
    ];

    const appendMenu = () => {
        _menus.map(menu => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            const menuDesc = document.createElement('div');
            menuDesc.setAttribute('menu-desc');
            const img = document.createElement('img');
            img.src = _menus.image;

            const heading = document.createElement('div');
            heading.textContent = _menus.heading;
            const desc = document.createElement('p');
            desc.textContent = _menus.description;

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