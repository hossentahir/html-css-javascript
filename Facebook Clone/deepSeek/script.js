// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (username && password) {
    alert('Login successful!');
    window.location.href = 'profile.html';
  } else {
    alert('Please fill in all fields.');
  }
});

// Signup Link (for future functionality)
document.getElementById('signupLink').addEventListener('click', function (e) {
  e.preventDefault();
  alert('Sign up functionality coming soon!');
});