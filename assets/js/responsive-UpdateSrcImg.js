function updateImageSrc() {
    var screenWidth = window.innerWidth;
    var images = document.querySelectorAll('.rev-slidebg');
    
    images.forEach(function(image) {
        var mobileSrc = image.getAttribute('data-mobile-src');
        var desktopSrc = image.getAttribute('data-desktop-tablet-src');
        
        if (screenWidth < 768 && mobileSrc) {
            image.src = mobileSrc;
        } else if (desktopSrc) {
            image.src = desktopSrc;
        }
    });
}
window.addEventListener('resize', updateImageSrc);
updateImageSrc();
