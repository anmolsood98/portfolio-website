const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#form-message");
const themeButton = document.querySelector("#theme-button");
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (nameInput.value.trim() === ""){
        formMessage.textContent = "Please enter your name."
        return;
    }
    if (emailInput.value.trim() === ""){
        formMessage.textContent = "Please enter your email."
        return;
    }
    if (emailInput.validity.valid === false){
        formMessage.textContent = "Please enter a valid email address."
        return;
    }
    if (messageInput.value.trim() === ""){
        formMessage.textContent = "Please enter your message."
        return;
    }

    formMessage.textContent = "Thanks " + nameInput.value + "! Your form has been submitted successfully."
    contactForm.reset();    
});
