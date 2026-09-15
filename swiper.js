window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const about = document.querySelector('#about');
    const aboutHeight = about.offsetHeight;

    if (window.scrollY > aboutHeight) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.zIndex = '1000';
        header.style.background = '#f2eefe';
    } else {
        header.style.position = 'static';
        header.style.background = 'transparent';
    }

});



document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Перевірка на випадок порожнього якоря або відсутності id
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault(); // Скасовуємо резкий стрибок сторінки
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const scrollTopBtn = document.querySelector('#scrollTopBtn');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Клік по кнопці — плавний скролл вгору
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});