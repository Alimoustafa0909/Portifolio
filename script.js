document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Reset errors
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

  let hasError = false;

  if (name === "") {
    nameError.textContent = "Please enter your name.";
    nameError.style.display = "block";
    hasError = true;
  }

  if (email === "") {
    emailError.textContent = "Please enter your email.";
    emailError.style.display = "block";
    hasError = true;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = "block";
    hasError = true;
  }

  if (message === "") {
    messageError.textContent = "Please enter your message.";
    messageError.style.display = "block";
    hasError = true;
  }

  if (!hasError) {
    alert(`Thank you for contacting us, ${name}!`);
    document.getElementById("contactForm").reset();
  }
});

// Dark Mode
const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;

// Load theme from storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  updateButtonText(savedTheme);
} else {
  body.classList.add("light-mode");
}

// Toggle handler
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  const newTheme = body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";
  localStorage.setItem("theme", newTheme);
  updateButtonText(newTheme);
});

function updateButtonText(theme) {
  if (theme === "dark-mode") {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
}
