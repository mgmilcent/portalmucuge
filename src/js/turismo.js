document.addEventListener('DOMContentLoaded', () => {
    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        const carouselInner = carousel.querySelector('.carousel-inner');
        const totalItems = carousel.querySelectorAll('.carousel-item').length;
        let index = 0;

        prevButton.addEventListener('click', () => {
            const itemsToShow = getItemsToShow();
            if (index > 0) {
                index--;
            } else {
                index = totalItems - itemsToShow;
            }
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            const itemsToShow = getItemsToShow();
            if (index < totalItems - itemsToShow) {
                index++;
            } else {
                index = 0;
            }
            updateCarousel();
        });

        function updateCarousel() {
            const width = carouselInner.clientWidth;
            const itemsToShow = getItemsToShow();
            const itemWidth = width / itemsToShow;
            carouselInner.style.transform = `translateX(-${index * itemWidth}px)`;
        }

        function getItemsToShow() {
            const width = window.innerWidth;
            if (width < 768) {
                return 1;
            } else if (width < 992) {
                return 2;
            } else if (width < 1200) {
                return 3;
            } else {
                return 4;
            }
        }

        // Atualizar o carrossel ao redimensionar a janela
        window.addEventListener('resize', () => {
            updateCarousel();
        });

        // Inicializar o carrossel
        updateCarousel();
    }

    // Inicializar os carrosséis
    initCarousel('carousel1');
    initCarousel('carousel2');
    initCarousel('carousel3');
});