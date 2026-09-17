window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const about = document.querySelector('#about');
    const aboutHeight = about.offsetHeight;

    if (window.scrollY > aboutHeight) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.zIndex = '1000';
        header.style.background = 'var(--header-bg)';
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

const themeToggleBtn = document.querySelector('#themeToggle');
const themeIcon = themeToggleBtn.querySelector('.theme-icon');

// Перевіряємо збережену тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeIcon.textContent = '☀️';
    }
}

// Перемикання при кліку
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
    }
});