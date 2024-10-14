// scripts.js

// Opción para usar configuración manual o automática
const useManualCountdown = false; // Cambia a 'true' para configurar manualmente

// Configuración de la fecha y hora de finalización del contador (solo si 'useManualCountdown' es true)
const manualCountdownEndTime = '2024-10-14T12:00:00'; // <-- Configura la fecha y hora de finalización manual

// Función para generar un tiempo aleatorio entre 15h 07m 30s y 21h 24m 30s
function getRandomCountdownTime() {
    // Tiempo actual
    const now = new Date().getTime();

    // Tiempo mínimo y máximo en milisegundos
    const minTime = (15 * 3600 + 7 * 60 + 30) * 1000; // 15 horas, 7 minutos, 30 segundos
    const maxTime = (21 * 3600 + 24 * 60 + 30) * 1000; // 21 horas, 24 minutos, 30 segundos

    // Generar un tiempo aleatorio entre minTime y maxTime
    const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;

    // Calcular la fecha y hora de finalización
    const endTime = new Date(now + randomTime);

    return endTime;
}

// Obtener la fecha y hora de finalización según la configuración
let countdownEndTime;

if (useManualCountdown) {
    countdownEndTime = new Date(manualCountdownEndTime).getTime();
} else {
    countdownEndTime = getRandomCountdownTime().getTime();
}

// Función para el contador regresivo
function countdownTimer(elementId, endTime) {
    // Obtener el elemento del contador por su ID
    const countdownElement = document.getElementById(elementId);
    if (!countdownElement) return; // Si el elemento no existe, salir de la función

    // Seleccionar los elementos de los números dentro del contador usando clases
    const daysElement = countdownElement.querySelector('.days');
    const hoursElement = countdownElement.querySelector('.hours');
    const minutesElement = countdownElement.querySelector('.minutes');
    const secondsElement = countdownElement.querySelector('.seconds');

    // Verificar que todos los elementos existen
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;

    // Función que actualiza el contador cada segundo
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = endTime - now;

        if (distance < 0) {
            clearInterval(x);
            // Establecer los valores a cero si el tiempo se ha agotado
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

        // Cálculos de tiempo
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatear los números para que siempre tengan dos dígitos
        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Actualizar los valores en el contador
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

    }, 1000);
}

// Inicializar el contador
function initCountdown() {
    // Inicializar el contador por su ID
    countdownTimer('countdown', countdownEndTime);
}

// Código para la notificación de prueba social (permanece igual)
function showSocialProof() {
    const names = ['María', 'Carlos', 'Ana', 'Luis', 'Sofía', 'Jorge', 'Lucía', 'Miguel', 'Noelia', 'Pedro'];
    const surnames = ['G.', 'R.', 'M.', 'P.', 'L.', 'S.', 'T.', 'D.', 'V.', 'H.'];
    const countries = ['Argentina', 'Colombia', 'México', 'Chile', 'Perú', 'Ecuador', 'Uruguay', 'Paraguay', 'Bolivia', 'Costa Rica'];

    const randomFirstName = names[Math.floor(Math.random() * names.length)];
    const randomSurnameInitial = surnames[Math.floor(Math.random() * surnames.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    const boldName = `<strong>${randomFirstName} ${randomSurnameInitial}</strong>`;
    const message = `${boldName} de ${randomCountry} se sumó a la clase gratis`;

    const socialProof = document.getElementById('social-proof');
    socialProof.innerHTML = message;
    socialProof.style.display = 'block';

    // Ocultar después de 5-10 segundos
    setTimeout(() => {
        socialProof.style.display = 'none';
    }, Math.floor(Math.random() * 5000) + 5000); // Entre 5 y 10 segundos
}

// Función para programar las notificaciones de prueba social
function scheduleSocialProof() {
    // Mostrar notificación
    showSocialProof();

    // Programar la siguiente notificación
    const nextInterval = Math.floor(Math.random() * 20000) + 10000; // Entre 10 y 30 segundos
    setTimeout(scheduleSocialProof, nextInterval);
}

// Inicializar todo al cargar la página
window.onload = () => {
    // Iniciar el contador regresivo
    initCountdown();

    // Programar la primera notificación entre 10 y 30 segundos
    const firstInterval = Math.floor(Math.random() * 20000) + 10000; // Entre 10 y 30 segundos
    setTimeout(scheduleSocialProof, firstInterval);
};
