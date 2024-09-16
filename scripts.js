// Código para el acordeón de la sección de temas
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener el contenido asociado
        const accordionContent = button.nextElementSibling;

        // Alternar la clase 'active' en el botón
        button.classList.toggle('active');

        // Mostrar u ocultar el contenido
        if (accordionContent.style.display === 'block') {
            accordionContent.style.display = 'none';
        } else {
            accordionContent.style.display = 'block';
        }
    });
});

// Código para el contador regresivo visual
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;

    setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = `${hours}h ${minutes}m ${seconds}s`;

        if (--timer < 0) {
            timer = 0;
            display.textContent = "Tiempo agotado";
        }
    }, 1000);
}

window.onload = () => {
    // Iniciar el contador regresivo de menos de 24 horas
    const countdownDuration = 23 * 60 * 60 + 59 * 60 + 59; // Menos de 24 horas en segundos
    const display = document.getElementById('countdown');
    startCountdown(countdownDuration, display);

    // Mostrar notificación de prueba social después de cargar la página
    setTimeout(() => {
        showSocialProof();
    }, Math.floor(Math.random() * 5000) + 5000); // Entre 2 y 7 segundos
};

// Código para la notificación de prueba social
function showSocialProof() {
    const names = ['María', 'Carlos', 'Ana', 'Luis', 'Sofía', 'Jorge', 'Lucía', 'Miguel', 'Noelia', 'Pedro'];
    const surnames = ['G.', 'R.', 'M.', 'P.', 'L.', 'S.', 'T.', 'D.', 'V.', 'H.'];
    const countries = ['Argentina', 'Colombia', 'México', 'Chile', 'Perú', 'Ecuador', 'Uruguay', 'Paraguay', 'Bolivia', 'Costa Rica'];

    const randomName = names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    const message = `${randomName} de ${randomCountry} se sumó a la clase gratis`;

    const socialProof = document.getElementById('social-proof');
    socialProof.textContent = message;
    socialProof.style.display = 'block';

    // Ocultar después de 5-10 segundos
    setTimeout(() => {
        socialProof.style.display = 'none';
    }, Math.floor(Math.random() * 5000) + 5000); // Entre 5 y 10 segundos
}
