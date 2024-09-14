// Código para el acordeón de la sección de temas
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const isOpen = accordionContent.style.display === 'block';

        // Cerrar todos los contenidos
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
        });

        // Abrir el contenido actual si estaba cerrado
        if (!isOpen) {
            accordionContent.style.display = 'block';
        }
    });
});

// Código para el contador regresivo de 24 horas
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;

    setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + "h " + minutes + "m " + seconds + "s";

        if (--timer < 0) {
            timer = 0;
            display.textContent = "Tiempo agotado";
        }
    }, 1000);
}

window.onload = () => {
    const countdownDuration = 24 * 60 * 60; // 24 horas en segundos
    const display = document.getElementById('countdown');
    startCountdown(countdownDuration, display);
};
