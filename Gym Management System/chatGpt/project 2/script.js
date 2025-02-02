// A simple function to display alerts for different logins
function showAlert(role) {
    alert(`You are logged in as ${role}`);
}

// Example of how to set up login or other interactive features
document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('role');
    if (role) {
        alert(`Logged in as ${role}`);
    }
});
