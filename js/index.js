// index.js
// Lógica de la página de login (index.html)

// Credenciales válidas (demo). En un proyecto real esto se valida
// contra un backend/API, nunca se deja "hardcodeado" en el cliente.
const USUARIO_VALIDO = "44385416@certus.edu.pe";
const CLAVE_VALIDA = "123";

/**
 * Valida el usuario y la clave ingresados.
 * Si son correctos, redirige a dashboard.html.
 * Si no, muestra un mensaje de error.
 */
function iraDashboard(usuario, clave) {
  const esValido = usuario === USUARIO_VALIDO && clave === CLAVE_VALIDA;

  if (esValido) {
    window.location.href = "catalogo.html";
  } else {
    mostrarError(true);
  }

  return esValido;
}

/**
 * Muestra u oculta el mensaje de error debajo del campo Clave.
 */
function mostrarError(mostrar) {
  const errorEl = document.getElementById("loginError");
  if (!errorEl) return;
  errorEl.classList.toggle("hidden", !mostrar);
}

// Enganchamos el formulario cuando el DOM está listo
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    const usuario = document.getElementById("email").value.trim();
    const clave = document.getElementById("password").value.trim();

    mostrarError(false);
    iraDashboard(usuario, clave);
  });
});
