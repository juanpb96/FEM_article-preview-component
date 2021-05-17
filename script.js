const toggleClass = ({target}) => {
    const parentElement = 'profile';
    const width = document.documentElement.clientWidth;
    
    if (width < 1024) {
        profileSection.classList.toggle(`${parentElement}--active`);
        profileContainer.classList.toggle(`${parentElement}__container--active`);
        authorDiv.classList.toggle(`${parentElement}__author--hidden`);
    } 

    socialDiv.classList.toggle(`${parentElement}__social--active`);

    // Toggle button and its img active state
    const imgPath = './images/icon-share';
    buttonImg.src = buttonImg.src.includes('icon-share.svg') ? imgPath + '-active.svg' : imgPath + '.svg';
    button.classList.toggle('btn--active');
};

const profileSection = document.getElementsByClassName('profile')[0];
const profileContainer = document.getElementsByClassName('profile__container')[0];
const authorDiv = document.getElementsByClassName('profile__author')[0];
const socialDiv = document.getElementsByClassName('profile__social')[0];
const buttonImg = document.getElementsByClassName('btn__img')[0];
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', toggleClass);    
// Clean up styles according to screen size
const cleanStyles = () => {
    const parentElement = 'profile';
    const width = document.documentElement.clientWidth;

    if (width >= 1024 && button.className.includes('btn--active')) {
        profileSection.className = `${parentElement}`;
        profileContainer.className = `${parentElement}__container`;
        authorDiv.className = `${parentElement}__author`;
    } else if (button.className.includes('btn--active')) {
        profileSection.className = `${parentElement} ${parentElement}--active`;
        profileContainer.className = `${parentElement}__container ${parentElement}__container--active`;
        authorDiv.className = `${parentElement}__author ${parentElement}__author--hidden`;
    }
}

window.addEventListener('resize', cleanStyles);