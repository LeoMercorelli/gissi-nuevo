// ===========================
// MENÚ MOBILE RESPONSIVE
// ===========================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.header__nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('open');
            // Cambia aria-label para accesibilidad
            menuToggle.setAttribute('aria-label', nav.classList.contains('open') ? 'Cerrar menú' : 'Abrir menú');
        });

        // Cerrar menú cuando hago click en un link (sólo móvil)
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth < 800 && nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    menuToggle.setAttribute('aria-label', 'Abrir menú');
                }
            });
        });
    }
});

// ===========================
// FORMULARIO DE CONTACTO (Frontend Only)
// ===========================

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contacto');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Limpio feedback previo
        feedback.textContent = '';
        feedback.style.color = 'var(--color-error)';

        // Obtengo valores
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        // Validación básica
        if (!nombre || !email || !mensaje) {
            feedback.textContent = 'Por favor completá todos los campos obligatorios.';
            return;
        }
        // Validación email (regex simple)
        if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
            feedback.textContent = 'Ingresá un email válido.';
            form.email.focus();
            return;
        }

        // Simulo envío OK
        feedback.textContent = '¡Mensaje enviado! Te responderemos pronto 😊';
        feedback.style.color = 'var(--color-exito)';
        form.reset();

        // Borro el mensaje a los 4 segundos
        setTimeout(() => {
            feedback.textContent = '';
        }, 4000);
    });
});
