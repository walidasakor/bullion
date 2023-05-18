// Get the parent element
const parentElement = document.getElementById('parentElement');

// Get the input field element
const inputField = document.getElementById('myInput');

// Add a click event listener to the parent element
parentElement.addEventListener('click', function() {
  if (inputField.style.display === 'none' || inputField.style.display === '') {
    inputField.style.display = 'block';
  } else {
    inputField.style.display = 'none';
  }
});

const authForm = document.querySelector('.auth-form');
const authInput = document.querySelector('.auth-input');
const authError = document.querySelector('.auth-error');
const cartTotal = document.querySelector('.cart-total')


authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = authInput.value;
  if (code.length === 8 && /^\d+$/.test(code)) {
    // if code is valid, redirect to different webpage
    // window.location.href = 'shipping.html';
    document.querySelector(".auth-error").innerHTML = "In Stock"
  }else if(cartTotal <= ''){
    document.querySelector(".auth-error").innerHTML = "No item selected"
  } else {
    // if code is invalid, display error message
    authError.textContent = 'Invalid code.';
  }
});