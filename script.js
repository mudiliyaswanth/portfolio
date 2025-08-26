const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");
const body = document.body;

// Load theme from localStorage if available
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  icon.classList.replace("fa-sun", "fa-moon");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});
