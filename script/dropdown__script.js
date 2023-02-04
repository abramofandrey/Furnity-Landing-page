// console.log('hello');

const dropdownOpen = document.querySelector('#dropdownOpenBasket').addEventListener('click', (event) => {
    document.querySelector('.dropdown').classList.toggle('dropdown__hidden');
});

const dropdownBasketClose = document.querySelector('.dropdown__btn-close-basket')
.addEventListener('click', (event) => {
    document.querySelector('.dropdown').classList.toggle('dropdown__hidden');
});

const dropdownOpenSearch = document.querySelector('#dropdownOpenBSearch').addEventListener('click', (event) => {
    document.querySelector('.dropdown-search').classList.toggle('dropdown-search__hidden');
});

const dropdawnSearchClose = document.querySelector('.dropdown__btn-close-search').addEventListener('click', (event) => {
    document.querySelector('.dropdown-search').classList.toggle('dropdown-search__hidden');
});


 /*Использована логика: При каждом клике перебираем все существующие li и везде убираем класс 'active' (хоть он и присутсвтует только у одного). После чего добавляем этот класс на текущий кликнутый, this*/

 const navigationList = document.querySelectorAll('.navigation__list a');

 for (let i = 0; i < navigationList.length; i++) {
     navigationList[i].addEventListener('mousemove', function () {
         for (let j = 0; j < navigationList.length; j++) {
             navigationList[j].classList.remove('navigation__link--active');
         };

         this.classList.add('navigation__link--active');
     });
 };

 const menu = document.querySelectorAll('.menu__list a');

 for (let i = 0; i < menu.length; i++) {
     menu[i].addEventListener('mousemove', function () {
         for (let j = 0; j < menu.length; j++) {
             menu[j].classList.remove('menu__item-link--active');
         };

         this.classList.add('menu__item-link--active');
     });
 };