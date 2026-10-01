document.addEventListener('DOMContentLoaded', function () {
    const sidebarHTML = `
    <aside class="sidebar">
        <nav>
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><a href="about.html">О центре</a></li>
                <li><a href="index.html#services">Услуги</a></li>
                <li><a href="team.html">Специалисты</a></li>
                <li><a href="price.html">Цены</a></li>
                <li><a href="index.html#schedule">Расписание</a></li>
                <li><a href="blog.html">Блог</a></li>
                <li><a href="Личныйкабинет.html">Запись на прием</a></li>
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
});
