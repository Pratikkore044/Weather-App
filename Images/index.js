const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weather = document.querySelector('.weather-box');
const weather = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click',()=>{
    const APIKey='f5d6ce0d0f6773a665adb26e78e11755';
    const city = document.querySelector('.search-box input').ariaValueMax;


    if(city==='')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json =>{

        if(json.cod === '404'){
            container.computedStyleMap.height = '400px'
        }
    })
})