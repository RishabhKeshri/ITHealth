// login.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Basic simulation of user authentication
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === 'user' && password === 'password') {
      // Redirect to the dashboard on successful login
      window.location.href = 'it2.html';
    } else {
      document.getElementById('loginMessage').textContent = 'Invalid credentials. Please try again.';
    }
  });
  