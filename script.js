// Typing Effect
window.onload = function () {
  window.scrollTo(0, 0);
  history.replaceState(null, null, window.location.pathname);
};
const roles = [
  "Salesforce Administrator",
  "Salesforce Service Cloud Consultant",
  "Salesforce Analyst",
  "Data Analyst (Snowflake)",
  "Business Analyst"
];

let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
  if (j < roles[i].length) {
    typing.textContent += roles[i][j++];
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = roles[i].substring(0, --j);
    setTimeout(erase, 40);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(type, 300);
  }
}
type();

// Reveal Animations
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// CONTACT FORM FUNCTIONALITY
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailto = `mailto:nikhilmanchikanti4@gmail.com
    ?subject=Portfolio Contact from ${encodeURIComponent(name)}
    &body=${encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
    )}`;

  window.location.href = mailto;
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo(0, 0);
  }
  
});
