const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const passwordOutput = document.getElementById('password-output');

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

document.getElementById('toggle-theme').addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});

document.getElementById('show-password').addEventListener('change', () => {
  const actual = passwordOutput.getAttribute('data-password');
  passwordOutput.textContent = event.target.checked ? actual : '*'.repeat(actual.length);
});

function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const includeUpper = document.getElementById('uppercase').checked;
  const includeLower = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;
  const excludeSimilar = document.getElementById('exclude-similar').checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

  let charPool = '';
  if (includeUpper) charPool += upperChars;
  if (includeLower) charPool += lowerChars;
  if (includeNumbers) charPool += numberChars;
  if (includeSymbols) charPool += symbolChars;

  if (excludeSimilar) {
    charPool = charPool.replace(/[l1O0]/g, '');
  }

  if (!charPool) {
    passwordOutput.textContent = "Please select at least one character type.";
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randIndex];
  }

  passwordOutput.setAttribute('data-password', password);
  const showPw = document.getElementById('show-password').checked;
  passwordOutput.textContent = showPw ? password : '*'.repeat(password.length);

  const strength = checkStrength(password);
  const strengthEl = document.getElementById('strength-indicator');
  strengthEl.textContent = `Strength: ${strength}`;
  strengthEl.className = `strength-${strength.toLowerCase()}`;

  savePassword(password);
  displaySavedPasswords();
}

function checkStrength(password) {
  if (password.length >= 12 && /[A-Z]/.test(password) &&
      /[a-z]/.test(password) && /\d/.test(password) && /[^\w]/.test(password)) {
    return "Strong";
  } else if (password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password)) {
    return "Medium";
  }
  return "Weak";
}

function copyPassword() {
  const text = passwordOutput.getAttribute('data-password');
  if (!text || text.startsWith("Please")) return;

  navigator.clipboard.writeText(text).then(() => {
    alert("Password copied to clipboard!");
  });
}

function savePassword(pw) {
  let saved = JSON.parse(localStorage.getItem('savedPasswords')) || [];
  saved.unshift(pw);
  if (saved.length > 5) saved.pop();
  localStorage.setItem('savedPasswords', JSON.stringify(saved));
}

function displaySavedPasswords() {
  const saved = JSON.parse(localStorage.getItem('savedPasswords')) || [];
  const list = document.getElementById('saved-passwords');
  list.innerHTML = '';
  saved.forEach(pw => {
    const li = document.createElement('li');
    li.textContent = pw;
    list.appendChild(li);
  });
}

displaySavedPasswords();
