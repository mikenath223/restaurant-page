const Contact = (() => {
    const div =  document.createElement('div');
        div.setAttribute('class', 'div');
    const _h1 = document.createElement('h1');
        _h1.setAttribute('class', 'headline');
        _h1.textContent = 'Please contact us for more details about our services';
    const _p = document.createElement('p');
        _p.textContent = '08083334453';
    const emailTag = document.createElement('p');
    emailTag.textContent = 'Email: ourservices@restaurant.co'

        div.appendChild(_h1);
        div.appendChild(_p);
        div.appendChild(emailTag);

        const createDiv = () => {
            return div
        }
    return {
        createDiv,
    }
})();

const contact = Contact.createDiv();
export default contact;
