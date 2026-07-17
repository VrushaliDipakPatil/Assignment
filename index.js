// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user = {
        username: username,
        email: email,
        phone: phone
    };

    localStorage.setItem(email, JSON.stringify(user));

    showUserOnScreen(user);

    event.target.username.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";


}

function showUserOnScreen(user) {
    const parent = document.getElementById('users');
    const li = document.createElement('li');
    li.textContent = `Username:${user.username}, Email:${user.email}, Phone: ${user.phone}`;
    parent.appendChild(li);
}

function getUserFromLocalStorage() {
    const parent = document.getElementById('users');
    parent.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);

        const user = JSON.parse(localStorage.getItem(key));

        showUserOnScreen(user);
    }
}

window.addEventListener("DOMContentLoaded", getUserFromLocalStorage);

module.exports = handleFormSubmit;