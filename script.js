const form = document.querySelector("#form");

const dataName = document.querySelector("#data-name");
const dataSummary = document.querySelector("#data-summary");
const dataPhone = document.querySelector("#data-phone");
const dataEmail = document.querySelector("#data-email");
const dataAddress = document.querySelector("#data-address");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.elements["name"].value;
    const summary = e.target.elements["summary"].value;
    const phone = e.target.elements["phone"].value;
    const email = e.target.elements["email"].value;
    const address = e.target.elements["address"].value;

    dataName.innerText = name;
    dataSummary.innerText = summary;
    dataPhone.innerText = phone;
    dataEmail.innerText = email;
    dataAddress.innerText = address;

})