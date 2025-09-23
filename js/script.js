// ===================== CONTACT FORM VALIDATION =====================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector("#name");
      const email = form.querySelector("#email");
      const message = form.querySelector("#message");

      // basic validation
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        alert("⚠️ Please fill in all fields before submitting.");
        return;
      }

      // simple email check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) {
        e.preventDefault();
        alert("⚠️ Please enter a valid email address.");
      }
    });
  }
});


// ===================== MOBILE NAV TOGGLE =====================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

