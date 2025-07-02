document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (email === '' || password === '') {
    errorMsg.textContent = 'Please fill in all fields.';
  } else {
    errorMsg.textContent = '';
    // Redirect to home.html
    window.location.href = 'home.html';
  }
});
