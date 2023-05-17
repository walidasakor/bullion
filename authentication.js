const authForm = document.querySelector('.auth-form');
const authInput = document.querySelector('.auth-input');
const authError = document.querySelector('.auth-error');

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = authInput.value;
  if (code.length === 8 && /^\d+$/.test(code)) {
    // if code is valid, redirect to different webpage
    window.location.href = 'shipping.html';
  } else {
    // if code is invalid, display error message
    authError.textContent = 'Invalid code. Please enter a 5-digit number.';
  }
});
