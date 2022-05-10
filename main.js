/*США*/
let elem1 = document.querySelector('.window_map-USA')
let text1 = document.querySelector('.window_map-a1')




elem1.addEventListener('mouseover', function () {
    text1.classList.add("window_map-light");
})

elem1.addEventListener('mouseleave', function () {
    text1.classList.remove("window_map-light");
})


/*Мексика*/
let elem2 = document.querySelector('.window_map-Mexica')
let text2 = document.querySelector('.window_map-a2')




elem2.addEventListener('mouseover', function () {
    text2.classList.add("window_map-light");
})

elem2.addEventListener('mouseleave', function () {
    text2.classList.remove("window_map-light");
})

/*Европа*/
let elem3 = document.querySelector('.window_map-Europa')
let text3 = document.querySelector('.window_map-a3')




elem3.addEventListener('mouseover', function () {
    text3.classList.add("window_map-light");
})

elem3.addEventListener('mouseleave', function () {
    text3.classList.remove("window_map-light");
})

/*Африка*/
let elem4 = document.querySelector('.window_map-Africa')
let text4 = document.querySelector('.window_map-a4')




elem4.addEventListener('mouseover', function () {
    text4.classList.add("window_map-light");
})

elem4.addEventListener('mouseleave', function () {
    text4.classList.remove("window_map-light");
})

/*Россия*/
let elem5 = document.querySelector('.window_map-Russia')
let text5 = document.querySelector('.window_map-a5')




elem5.addEventListener('mouseover', function () {
    text5.classList.add("window_map-light");
})

elem5.addEventListener('mouseleave', function () {
    text5.classList.remove("window_map-light");
})

/*Китай*/
let elem6 = document.querySelector('.window_map-China')
let text6 = document.querySelector('.window_map-a6')




elem6.addEventListener('mouseover', function () {
    text6.classList.add("window_map-light");
})

elem6.addEventListener('mouseleave', function () {
    text6.classList.remove("window_map-light");
})

/*Корея*/
let elem7 = document.querySelector('.window_map-Korea')
let text7 = document.querySelector('.window_map-a7')




elem7.addEventListener('mouseover', function () {
    text7.classList.add("window_map-light");
})

elem7.addEventListener('mouseleave', function () {
    text7.classList.remove("window_map-light");
})

/*Япония*/
let elem8 = document.querySelector('.window_map-Japanese')
let text8 = document.querySelector('.window_map-a8')




elem8.addEventListener('mouseover', function () {
    text8.classList.add("window_map-light");
})

elem8.addEventListener('mouseleave', function () {
    text8.classList.remove("window_map-light");
})

document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.to-up');

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            toTopBtn.style.display = 'block'
        } else {
            toTopBtn.style.display = 'none'
        }
    }

    // плавный скролл наверх 
    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};
