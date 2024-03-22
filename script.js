'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountyData = (country) => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>${(+data.population / 1000000).toFixed(1)}👫</span></p>
    <p class="country__row"><span>${data.languages[0].name}🗣️</span></p>
    <p class="country__row"><span>${data.currencies[0].name}💰</span></p>
    </div>
    </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  })
}

getCountyData('portugal')
getCountyData('usa')

