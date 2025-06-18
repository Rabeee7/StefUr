const homepageView = document.getElementById('homepage');
const loginView = document.getElementById('loginview');
const mainPage = document.getElementById('mainPage');
const getStartedBtn = document.getElementById('getStartedBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');

getStartedBtn.addEventListener('click', () => {
    homepageView.style.display = 'none';
    loginView.style.display = 'flex';
});

backToHomeBtn.addEventListener('click', () => {
    loginView.style.display = 'none';
    homepageView.style.display = 'flex';
});

// Login form logic
const form = document.getElementById('loginForm');
const usernameInput = form.username;
const passwordInput = form.password;
const submitButton = form.querySelector('button');

function validate() {
    const isValid = usernameInput.value.trim() && passwordInput.value.trim();
    submitButton.disabled = !isValid;
}

usernameInput.addEventListener('input', validate);
passwordInput.addEventListener('input', validate);

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!submitButton.disabled) {
        alert(`Logging in as ${usernameInput.value.trim()}`);  // Simulate login
        form.reset();
        submitButton.disabled = true;
        loginView.style.display = 'none';
        mainPage.style.display = 'flex';  // Show main page after login
    }
});
document.getElementById("myButton").addEventListener("click", function() {
    this.innerText = "Processing...";
});
