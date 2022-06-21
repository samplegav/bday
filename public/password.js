const loginForm = document.getElementById("form");
const loginButton = document.getElementById("submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;

    if (password === "Cookies") {
        window.location = "wish.html"
    } else {
        document.getElementById("failed").innerText= "Try again"
        console.log("fatt")
    }
})