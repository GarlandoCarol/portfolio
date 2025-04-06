<script>
document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider-wrapper');

    sliders.forEach(slider => {
        const sliderContainer = slider.querySelector('.slider');
        const slides = sliderContainer.querySelectorAll('.combo-card');
        const prevBtn = slider.querySelector('.carousel-btn.left');
        const nextBtn = slider.querySelector('.carousel-btn.right');
        const dots = slider.querySelectorAll('.slider-dot');

        let currentIndex = 0;

        function updateSlider(index) {
            if (index >= slides.length) {
                currentIndex = 0;  // Torna alla prima card se si arriva all'ultima
            } else if (index < 0) {
                currentIndex = slides.length - 1;  // Torna all'ultima card se si va oltre la prima
            } else {
                currentIndex = index;
            }

            // Calcola l'offset per spostare la slider
            const offset = -currentIndex * 100;
            sliderContainer.style.transform = `translateX(${offset}%)`;

            // Aggiorna i punti (se presenti)
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots.length > 0) {
                dots[currentIndex].classList.add('active');
            }
        }

       
        prevBtn.addEventListener('click', () => {
            updateSlider(currentIndex - 1);
        });

        nextBtn.addEventListener('click', () => {
            updateSlider(currentIndex + 1);
        });

        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
            });
        });

        // Inizializza la slider
        updateSlider(currentIndex);
    });

    // Scroll smooth per i link ancorati
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
