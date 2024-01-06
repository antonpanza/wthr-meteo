const burger = document.querySelector('.header__menu');

burger.addEventListener('click',() =>{  
    burger.classList.toggle('active');
});

const linkPage = document.querySelector('.link-page')
const arrowPrev = document.querySelector('.header__arrow-prev')
const page1 = document.querySelector('.modal-wrapper')
const page2 = document.querySelector('.modal-nextPage')

linkPage.addEventListener('click', function () {

    page1.style.display = 'none';
    page2.style.display = 'block';
  });

  arrowPrev.addEventListener('click', function () {

    page1.style.display = 'block';
    page2.style.display = 'none';
  });


// ----------------------------- API weather ----------------------------- 

const apiKey = 'bd13f22f7ddfb02c48dc271e1177ace9';
const cityName = 'Рыбница';
const lang = 'ru';
const units = 'metric'; //'metric', 'standard',  'imperial'
const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`

const fetchData = async () => {
    await fetch(apiLink)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let iconName = `${data.weather[0].icon}`
            let iconUrl = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
            let iconAlt = data.weather[0].main;
            document.querySelector('.meteo__img').innerHTML = `<img src="${iconUrl}" alt="${iconAlt}">`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
fetchData()

// ----------------------------- swiper----------------------------- 
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper', {
      // Настройки слайдера
      
      slidesPerView: 8, // Отображать по одному слайду
    //   spaceBetween: 30, // Расстояние между слайдами
    //   navigation: {
    //     nextEl: '.swiper-button-next', // Стрелка "вперед"
    //     prevEl: '.swiper-button-prev', // Стрелка "назад"
    //   },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
  });




// ----------------------------- hidden-cards---------------------------- 
const meteoCards = document.querySelectorAll('.modal-nextPage .meteo__card');

     meteoCards.forEach(card => {
         card.addEventListener('click', () => {
             document.querySelectorAll('.meteo__hidden').forEach(hiddenBlock => {
                 hiddenBlock.style.display = 'none';
             });
 

             const hiddenBlock = card.querySelector('.meteo__hidden');
             if (hiddenBlock) {
                 hiddenBlock.style.display = (hiddenBlock.style.display === 'none' || hiddenBlock.style.display === '') ? 'flex' : 'none';
             }
         });
     });