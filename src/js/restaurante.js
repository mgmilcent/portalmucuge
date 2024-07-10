let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.image');
    const totalImages = images.length;
    
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    document.querySelector('.carrossel-img').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});