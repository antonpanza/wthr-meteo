const burger = document.querySelector('.header__menu');


burger.addEventListener('click',() =>{  
    burger.classList.toggle('active');
});


const apiKey = 'bd13f22f7ddfb02c48dc271e1177ace9';
const cityName = 'Рыбница';
const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
fetch(apiLink)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });