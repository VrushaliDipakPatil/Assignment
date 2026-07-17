// Write your code below 
function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event);
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
}

module.exports = handleFormSubmit;