'use strict'
let burger = document.querySelector('.burger'),
    header = document.querySelector('header');

if (burger) {
    burger.addEventListener('click', () => {
        header.classList.toggle('header__active');
    });
}


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
        switch (dataType) {
            case 'telegram':
                error.classList.add('error_telegram-active');
                break;
            case 'info':
                error.classList.add('error_info-active');
                break;
            case 'portfolio':
                error.classList.add('error_portfolio-active');
                break;
            case 'instagram':
                error.classList.add('error_instagram-active');
                break;
        }
    });
}

//error end