let user = document.querySelector(".input");
let addBtn = document.querySelector(".add-list");
let task = document.querySelector(".tasks");

user.addEventListener("keyup", () => {
    if (user.value.trim() != 0) {
        addBtn.classList.add("active")
    }
    else {
        addBtn.classList.remove("active")
    }
})

addBtn.addEventListener("click", () => {
    if (user.value.trim() != 0) {
        let child = document.createElement("div")
        child.classList.add("item")
        child.innerHTML = `
        <p>${user.value}</p>
        <div class="item-btn">
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>`
        task.appendChild(child)
        user.value = "";
    }
})

task.addEventListener("click", (elem) => {
    if (elem.target.classList.contains("fa-xmark")) {
        elem.target.parentElement.parentElement.remove()
    }
})
task.addEventListener("click", (elem) => {
    if (elem.target.classList.contains("fa-check")) {
        elem.target.parentElement.parentElement.classList.toggle("completed")
    }
})