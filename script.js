function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const thankYouMsg = document.getElementById("thankYouMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  thankYouMsg.classList.remove("hidden");

  document.getElementById("contactForm").reset();

  return false;
}
