// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(el => observer.observe(el));

// Toggle mobile navigation menu
function toggleMenu() {
  document.querySelector('nav').classList.toggle('active');
}

// Loader fade-out on page load
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

// Event registration form submission using FormData (CORS-safe)
document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData();
  formData.append("name", form.name.value);
  formData.append("email", form.email.value);
  formData.append("phone", form.phone.value);

  fetch("https://script.google.com/macros/s/AKfycbyIiTfoumONUMV-FjlQ4EEXwmfvOO-tkRq4Ey2U9QvVpsuI3ekhJgQ3-z0VY1zDQ1zJ/exec", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(response => {
      document.getElementById('formStatus').textContent = 'Registration successful!';
      form.reset();
    })
    .catch(error => {
      document.getElementById('formStatus').textContent = 'Something went wrong. Please try again.';
      console.error('Error:', error);
    });
});

