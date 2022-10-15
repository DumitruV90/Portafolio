const sections = document.querySelectorAll(".section"),
    secBtns = document.querySelectorAll(".bar"),
    secBtn = document.querySelectorAll(".control"),
    allSections = document.querySelector(".main-content");

function transitions() {
    // Transición a la clase 'active'
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener("click", function () {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })
    }
    // Secciones activas
    allSections.addEventListener("click", (event) => {
        let id = event.target.dataset.id;
        if (id) {
            secBtns.forEach((btn) => {
                btn.classList.remove("active");
            })
            event.target.classList.add("active");
            // Secciones ocultas
            sections.forEach((section) => {
                section.classList.remove("active");
            })
            let element = document.getElementById(id);
            element.classList.add("active");
        }
    })
    // Modo claro u oscuro
    let lightBtn = document.querySelector(".light-theme");
    lightBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    })
}
transitions();

// Validación del formulario de contacto
const form = document.querySelector(".contact-form"),
    user_name = document.querySelector("#user_name"),
    email = document.querySelector("#email"),
    subject = document.querySelector("#subject"),
    message = document.querySelector("#message"),
    sendBtn = document.querySelector("#btn");

sendBtn.addEventListener("click", (e) => {
    let empty = "";
    if (![user_name.value, email.value, subject.value, message.value].includes(empty)) {
        swal("Oops!", "Esta sección está en desarrollo. Por ahora puedes enviarme un mensaje a través de Linkedin :)", "error");
        e.preventDefault();
        form.reset();
    }
});