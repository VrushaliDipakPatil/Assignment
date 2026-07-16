// Write your code below:
const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

const fruits = document.querySelectorAll('.fruit');

for (let i = 1; i < fruits.length; i += 2){
    fruits[i].style.backgroundColor = 'brown';
    fruits[i].style.color = 'white';
}

const fruitList = document.querySelector('.fruits');
fruitList.style.listStyleType = 'none';