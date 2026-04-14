document.addEventListener('DOMContentLoaded', () => {
    // === Generar corazones flotantes de fondo constantemente ===
    const container = document.getElementById('hearts-container');
    const heartSymbols = ['❤️', '💖', '✨', '🌸', '🥰'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Asignar símbolo aleatorio
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Posición horizontal aleatoria
        heart.style.left = Math.random() * 100 + 'vw';

        // Tamaño aleatorio para crear profundidad
        const size = Math.random() * 1.5 + 0.5;
        heart.style.fontSize = size + 'rem';

        // Duración de animación aleatoria para más naturalidad
        const duration = Math.random() * 5 + 5;
        heart.style.animationDuration = duration + 's';

        container.appendChild(heart);

        // Nos aseguramos de eliminar el corazón una vez que no se ve
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Crear corazones periódicamente
    setInterval(createHeart, 300);

    // === Lógica de interacción con la tarjeta ===
    const btn = document.getElementById('reveal-btn');
    const card = document.getElementById('main-card');

    btn.addEventListener('click', () => {
        // Mensaje secreto en consola como un Easter Egg de Programador Jr ;)
        console.log("%c¡Hola amor! Si estás leyendo la consola es porque eres bien curiosita.", "color: #ff7eb3; font-size: 16px; font-weight: bold;");
        console.log("%c¡Te extraño y confío plenamente en tus capacidades!", "color: #ff758c; font-size: 14px;");
        console.log("%cBy: Tu Programador fav JAJAJAJA ❤️", "color: #4a4a4a; font-size: 12px; font-style: italic;");

        // Iniciar animación de la tarjeta
        card.classList.add('open');

        // Hacer estallar confeti inmediatamente
        fireConfetti();
        // Disparar una segunda ola para mayor impacto
        setTimeout(fireConfetti, 500);
        setTimeout(fireConfetti, 1000);
    });

    // === Sistema de mini partículas (Confeti) ===
    function fireConfetti() {
        const colors = ['#ff7eb3', '#ff758c', '#ff4d6d', '#ffd1ff', '#ffffff'];

        for (let i = 0; i < 40; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Color aleatorio
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            // Posición inicial aleatoria
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -20 + 'px';

            // Forma aleatoria (Círculos o Cuadrados)
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }

            // Duración y caída más orgánica
            const duration = Math.random() * 3 + 3;
            confetti.style.animationDuration = duration + 's';

            // Un pequeño arrastre lateral en el viento (Drift)
            const horizontalDrift = (Math.random() - 0.5) * 300; 
            confetti.style.setProperty('--drift', horizontalDrift + 'px');

            const rotation = Math.random() * 360;
            confetti.style.transform = `rotate(${rotation}deg)`;

            document.body.appendChild(confetti);

            // Limpieza
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
});
