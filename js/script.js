'use strict'
let burger = document.querySelector('.burger'),
    header = document.querySelector('header');

burger.addEventListener('click', () => {
    header.classList.toggle('header__active');
});
// error start
const errorLink = document.querySelectorAll('.error_link');


for (let i = 0; i < errorLink.length; i++) {
    let dataType = errorLink[i].getAttribute('data-type'),
        error = document.querySelector('.error'),
        errorHead = document.querySelector('.error_top');
    errorLink[i].addEventListener('mouseleave', e => {
        errorHead.innerHTML = 'Taras Senko<span>Web Developer</span>';
        error.classList = 'error';
    });
    errorLink[i].addEventListener('mouseenter', e => {
        let dataType = errorLink[i].getAttribute('data-type'),
            error = document.querySelector('.error');
        console.log(dataType);
        switch (dataType) {
            case 'telegram':
                console.log('telegram')
                error.classList.add('error_telegram-active');
                errorHead.innerHTML = 'Telegram <span>Telegram</span>';
                break;
            case 'info':
                console.log('info')
                error.classList.add('error_info-active');
                errorHead.innerHTML = 'Info <span>Info</span>';
                break;
            case 'portfolio':
                console.log('portfolio')
                error.classList.add('error_portfolio-active');
                errorHead.innerHTML = 'Portfolio <span>Portfolio</span>';
                break;
            case 'instagram':
                console.log('instagram')
                error.classList.add('error_instagram-active');
                errorHead.innerHTML = 'Instagram <span>Instagram</span>';
                break;
        }
    });
}

//error end