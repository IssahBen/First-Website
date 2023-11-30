const message = document.querySelector("#message");
const form1 = document.querySelector("#form2");
const review = document.querySelector("#review");
const form2 = document.querySelector("#form3");
const comments = document.querySelector("#lists2");
form1.addEventListener
    ("submit", function (e) {
        e.preventDefault();
        e.target[2].value = "Message received";
        e.target[0].value = "";
        e.target[1].value = "";
    })

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    const newcom = document.createElement("li");

    newcom.innerText = e.target[0].value;
    newcom.style.listStyleType = "circle"
    comments.append(newcom);
    e.target[0].value = "";

})
const btn = document.querySelector("#change")

const random = function () {
    return Math.floor(Math.random() * 255 + 1);
}
btn.addEventListener("click", function () {
    this.style.backgroundColor = `rgb(${random()},${random()},${random()})`

})

