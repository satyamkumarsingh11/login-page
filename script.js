document.addEventListener("DOMContentLoaded", function () {

const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Define multiple valid users
const users = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "pass1" },
    { username: "guest", password: "guest" }
];

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "welcome.html";
}
    } else {
        message.style.color = 'red';
        message.textContent = "Invalid username or password.";
    }
});

}); // end of DOMContentLoaded

document.getElementById("logout-btn").addEventListener("click", function () {
    // Remove saved username
    localStorage.removeItem("loggedInUser");

    // Redirect to login page
    window.location.href = "index.html";
});