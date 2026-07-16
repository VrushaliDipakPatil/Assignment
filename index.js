// Write your code below:
const firstdiv = document.querySelector('div');

const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
subHeading.style.fontStyle = 'italic';

const mainHeading = document.querySelector('#main-heading');
firstdiv.insertBefore(subHeading, mainHeading.nextSibling);

const secondDiv = document.querySelectorAll('div')[1];

const totalFruits = document.createElement('p');
totalFruits.textContent = 'Total fruits: 4';
totalFruits.id = 'fruits-total';

const fruitList = document.querySelector('.fruits');
secondDiv.insertBefore(totalFruits, fruitList);