document.addEventListener('DOMContentLoaded', function() {
    // Función para verificar la visibilidad de los elementos en la ventana
    function checkVisibility() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const windowHeight = window.innerHeight;

        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    }

    // Verificar visibilidad inicial
    checkVisibility();

    // Evento de desplazamiento
    window.addEventListener('scroll', checkVisibility);

    // Función para manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Tu mensaje ha sido enviado con éxito.',
                });
                contactForm.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, completa todos los campos.',
                });
            }
        });
    }

    // Función para manejar el estado activo en el navbar
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Función para manejar el modo oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Verifica si el modo oscuro está almacenado
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.src = './utils/moon.png'; // Cambia a la imagen de la luna
    } else {
        darkModeToggle.src = './utils/sun.png'; // Cambia a la imagen del sol
    }

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.src = '../utils/sol.png'; // Cambia a la imagen de la luna
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggle.src = '../utils/luna.png'; // Cambia a la imagen del sol
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
