let form = document.getElementsByTagName('form')[0];

const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';
descriptionInput.placeholder = 'Enter fruit description';

const addButton = form.querySelector('button');
form.insertBefore(descriptionInput, addButton);


// add fruit to the cart
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let fruitName = document.getElementById('fruit-to-add').value;
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }

    let li = document.createElement('li');
    li.className = 'fruit';

    li.appendChild(document.createTextNode(fruitName));

    let p = document.createElement('p');
    p.textContent = fruitDescription;
    p.style.fontStyle = 'italic';
    li.appendChild(p);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = "X";

    li.appendChild(deleteBtn);

    fruititems.appendChild(li);

    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});


const filter = document.getElementById('filter');

filter.addEventListener('keyup', function (event) {
    const text = event.target.value.toLowerCase();
    const fruits = document.querySelectorAll('.fruit');
    fruits.forEach(function (fruit) {
        const fruitName = fruit.childNodes[0].textContent.toLowerCase();

        const description = fruit.querySelector('p') ?
            fruit.querySelector('p').textContent.toLowerCase() : '';

        if (fruitName.includes(text) || description.includes(text)) {
            fruit.style.display = 'flex';
        } else {
            fruit.style.display = 'none';
            }
    })
});



