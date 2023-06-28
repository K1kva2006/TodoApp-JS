const button = document.getElementById("button");   
const text = document.getElementById("text");
const ul = document.getElementById("ul");
const box = document.getElementById("box");

let array = [];
let sum = document.createElement("p");
sum.classList.add("sum");
box.appendChild(sum);
sum.textContent = `You have ${0} lists`;

button.onclick = () => {
    if (text.value === "") {
        false;
    } else {
        text.focus();
        let container = document.createElement("div");
        container.classList.add("container");
        let li = document.createElement("li");
        li.textContent = text.value;
        array.push(li);
        ul.appendChild(container);
        container.appendChild(li);
        li.classList.add("li");
        text.value = "";
        let remove = document.createElement("button");
        remove.textContent = "X";
        remove.classList.add("remove");
        container.appendChild(remove);

        sum.textContent = `You have ${array.length} lists`;

        remove.onclick = () => {
            container.remove();
            array.length--;
            sum.textContent = `You have ${array.length} lists`;
        };
    }
};
