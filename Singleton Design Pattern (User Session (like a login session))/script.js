// Singleton pattern for UserSession
class UserSession {
    constructor() {
        if (UserSession.instance) {
            return UserSession.instance;
        }
        this.isLoggedIn = false;
        UserSession.instance = this;
    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    getSessionStatus() {
        return this.isLoggedIn ? "You are logged in." : "You are not logged in.";
    }
}

// Instantiate Singleton object
const session = new UserSession();

// Accessing DOM elements
const loginButton = document.getElementById("loginBtn");
const logoutButton = document.getElementById("logoutBtn");
const sessionStatus = document.getElementById("sessionStatus");

// Event listeners for login and logout buttons
loginButton.addEventListener("click", () => {
    session.login();
    updateSessionStatus();
});

logoutButton.addEventListener("click", () => {
    session.logout();
    updateSessionStatus();
});

// Function to update session status in the DOM
function updateSessionStatus() {
    sessionStatus.textContent = session.getSessionStatus();
}

// Initially update session status
updateSessionStatus();
