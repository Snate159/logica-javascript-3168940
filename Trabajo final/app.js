// ===== GALERÍA =====
const thumbs = document.querySelectorAll('#thumbs img');
const mainImage = document.getElementById('mainImage');
let index = 0;

function showImage(i) {
  if (i < 0) i = thumbs.length - 1;
  if (i >= thumbs.length) i = 0;
  index = i;
  mainImage.src = thumbs[i].src;
  thumbs.forEach(t => t.classList.remove('active'));
  thumbs[i].classList.add('active');
}

thumbs.forEach((t, i) => t.onclick = () => showImage(i));
document.getElementById('prevBtn').onclick = () => showImage(index - 1);
document.getElementById('nextBtn').onclick = () => showImage(index + 1);
showImage(0);

// ===== FORMULARIO PQR =====
const pqrForm = document.getElementById('pqrForm');
const pqrFeedback = document.getElementById('pqrFeedback');

pqrForm.onsubmit = e => {
  e.preventDefault();
  const { name, email, message } = pqrForm;
  if (!name.value || !email.value || !message.value) {
    return pqrFeedback.textContent = "Completa todos los campos.";
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    return pqrFeedback.textContent = "Correo inválido.";
  }
  pqrFeedback.textContent = "Tu PQR fue enviado correctamente.";
  pqrForm.reset();
};

// ===== VINILO SCROLL =====
const vinyl = document.getElementById('vinyl');
window.onscroll = () => {
  vinyl.style.transform = `rotate(${scrollY % 360}deg)`;
  vinyl.style.opacity = Math.max(0.25, 1 - scrollY / 1200);
};

// ===== LIGHTBOX =====
const modal = document.getElementById('modalBackdrop');
document.getElementById('openLight').onclick = () => modal.classList.add('show');
document.getElementById('closeLight').onclick = () => modal.classList.remove('show');
modal.onclick = e => e.target === modal && modal.classList.remove('show');

// ===== LOGIN =====
const login = document.getElementById('loginBackdrop');
const loginForm = document.getElementById('loginForm');
const loginFeedback = document.getElementById('loginFeedback');

document.getElementById('openLogin').onclick = () => login.classList.add('show');
document.getElementById('closeLogin').onclick = () => login.classList.remove('show');
login.onclick = e => e.target === login && login.classList.remove('show');

loginForm.onsubmit = e => {
  e.preventDefault();
  const { user, pwd } = loginForm;
  if (!user.value || !pwd.value) {
    return loginFeedback.textContent = "Completa todos los campos.";
  }
  if (user.value === "demo" && pwd.value === "demo") {
    loginFeedback.textContent = "Inicio de sesión exitoso.";
    setTimeout(() => {
      login.classList.remove('show');
      if (!document.getElementById('userBadge')) {
        const span = document.createElement('span');
        span.id = "userBadge";
        span.textContent = ` • Hola, ${user.value}`;
        document.querySelector('.brand').appendChild(span);
      }
    }, 800);
  } else {
    loginFeedback.textContent = "Credenciales incorrectas (usa demo/demo).";
  }
};