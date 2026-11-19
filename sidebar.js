document.addEventListener('DOMContentLoaded', function () {
    // 1. Добавляем кнопку-бургер и само меню
    const sidebarHTML = `
    <button class="hamburger" id="burger-btn">☰</button>
    <aside class="sidebar" id="mySidebar">
        <nav>
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><a href="about.html">О центре</a></li>
                <li><a href="index.html#services">Услуги</a></li>
                <li><a href="team.html">Специалисты</a></li>
                <li><a href="price.html">Цены</a></li>
                <li><a href="index.html#schedule">Расписание</a></li>
                <li><a href="blog.html">Блог</a></li>
                <li><a href="Личный кабинет.html">Запись на прием</a></li>
                <li><a href="Отзывы.html">Отзывы</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="Контакты.html">Контакты</a></li>
            </ul>
        </nav>
    </aside>
    `;

    const placeholder = document.getElementById('sidebar');
    if (placeholder) {
        placeholder.outerHTML = sidebarHTML;
    }

    // 2. Логика открытия и закрытия меню
    const burgerBtn = document.getElementById('burger-btn');
    const sidebar = document.getElementById('mySidebar');

    if (burgerBtn && sidebar) {
        burgerBtn.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            
            // Меняем иконку с "бургера" на крестик при открытии
            if (sidebar.classList.contains('active')) {
                burgerBtn.innerHTML = '✕';
            } else {
                burgerBtn.innerHTML = '☰';
            }
        });
    }
});