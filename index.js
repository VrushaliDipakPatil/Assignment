const form = document.querySelector("form");
const fruitList = document.querySelector(".fruits");

const fruits = document.querySelectorAll(".fruit");

fruits.forEach((fruit) => {
    const editBtn =
        document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    fruit.appendChild(editBtn);
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fruitInput = document.getElementById("fruit-to-add");
    const fruitName = fruitInput.value.trim();

    if (fruitName === "") {
        return;
    }

    const li = document.createElement("li");
    li.className = "fruit";
    li.appendChild(document.createTextNode(fruitName));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    fruitList.appendChild(li);

    fruitInput.value = "";
})

fruitList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const li = e.target.parentElement;
        fruitList.removeChild(li);
    }
});

