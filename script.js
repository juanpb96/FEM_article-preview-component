const toggle = () => {
    const element = 'profile';
    const width = document.documentElement.clientWidth;
    
    if (width < 1024) {
        if (profileSection.className.includes('--active')) {
            profileSection.className = element;
            authorDiv.className = `${element}__author`;
            socialDiv.className = ` ${element}__social`;
        } else {
            profileSection.className += ` ${element}--active`;
            authorDiv.className += ` ${element}__author--hidden`;
            socialDiv.className += ` ${element}__social--active`;
        }
    } else {
        
    }

};

const profileSection = document.getElementsByClassName('profile')[0];
const authorDiv = document.getElementsByClassName('profile__author')[0];
const socialDiv = document.getElementsByClassName('profile__social')[0];
const buttons = document.getElementsByTagName('button');

[...buttons].forEach(button => {
    button.addEventListener('click', toggle);    
});