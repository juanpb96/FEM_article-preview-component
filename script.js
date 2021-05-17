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