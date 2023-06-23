// Login
const loginPassword = document.querySelector('#loginPassword');
const login_password = document.querySelector('#login_password');

loginPassword.addEventListener('click', function (e) {
  const type = login_password.getAttribute('type') === 'password' ? 'text' : 'password';
  login_password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});
