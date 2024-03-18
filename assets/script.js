const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

function Slide(number) {
    const bannerImgContainer = document.querySelector('.banner-img');
    const slideNumber = (number + slides.length) % slides.length;
    currentSlideNumber = slideNumber;

    bannerImgContainer.innerHTML = '';

    const slideImage = document.createElement('img');
    slideImage.src = './assets/images/slideshow/' + slides[slideNumber].image;
    slideImage.classList.add('banner-img');
    bannerImgContainer.appendChild(slideImage);

    let tagline = document.querySelector('#banner p');
    if (!tagline) {
        tagline = document.createElement('p');
        document.querySelector('#banner').appendChild(tagline);
    }
    tagline.innerHTML = slides[slideNumber].tagLine;

    updateDots(slideNumber);
}

function changeSlide(direction) {
    Slide(currentSlideNumber + direction);
}

function SlideDots() {
    const dotsContainer = document.querySelector('.dots');
    dotsContainer.innerHTML = ''; 
    
    slides.forEach((slide, number) => { 
        const dot = document.createElement('div');
        dot.className = 'dot';
        

        dot.addEventListener('click', () => Slide(number));
        
        dotsContainer.appendChild(dot);
    });
}

function updateDots(slideNumber) {
    const dots = document.querySelectorAll('.dots .dot');
    dots.forEach((dot, index) => {
        if (index === slideNumber) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    SlideDots();
    Slide(0);
    document.querySelector('.arrow_left').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.arrow_right').addEventListener('click', () => changeSlide(1));
});

