// ===========================
// Toast Helper
// ===========================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // Animate in
  setTimeout(() => toast.classList.add("show"), 100);

  // Auto remove after 3s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===========================
// Event Handling
// ===========================
document.getElementById("messageBtn").addEventListener("click", () => {
  showToast("🎉 You clicked the button!", "info");
});

// ===========================
// Light/Dark Mode
// ===========================
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleTheme.textContent = "Switch to Light Mode ☀️";
    showToast("🌙 Dark mode enabled", "info");
  } else {
    toggleTheme.textContent = "Switch to Dark Mode ";
    showToast("☀️ Light mode enabled", "info");
  }
});

// ===========================
// Counter
// ===========================
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counter = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  showToast(`Counter updated: ${count}`, "success");
});

// ===========================
// FAQ
// ===========================
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.display = "none");
      answer.style.display = "block";
      showToast("📖 FAQ opened: " + btn.textContent, "info");
    }
  });
});

// ===========================
// Dropdown
// ===========================
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

dropdownBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
  showToast("⬇️ Dropdown toggled", "info");
});

window.addEventListener("click", () => {
  dropdownContent.style.display = "none";
});

// ===========================
// Tabs
// ===========================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");

    showToast(`📌 Switched to ${btn.textContent}`, "info");
  });
});

// ===========================
// Form Validation
// ===========================
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    showToast(" All fields are required.", "error");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    showToast(" Invalid email address.", "error");
    return;
  }

  if (password.length < 6) {
    showToast(" Password must be at least 6 characters.", "error");
    return;
  }

  showToast("✅ Form submitted successfully!", "success");
  form.reset();
});
