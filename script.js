// Mengambil element form berdasarkan id
const form = document.getElementById("form");

// Ketika terjadi event SUBMIT pada FORM
form.addEventListener("submit", (e) => {
    
    // Mencegah terjadinya event
    e.preventDefault();

    // Mengambil data dari tag input
    const name = document.getElementById("name").value;
    const summary = document.getElementById("summary").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    // Mencetak data text dari from
    document.getElementById("data-name").innerText = name;
    document.getElementById("data-summary").innerText = summary;
    document.getElementById("data-phone").innerText = phone;
    document.getElementById("data-email").innerText = email;
    document.getElementById("data-address").innerText = address;
})