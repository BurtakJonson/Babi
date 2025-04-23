// Можно добавить функционал корзины
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent === 'В корзину') {
                button.textContent = 'Добавлено';
                button.style.backgroundColor = '#4caf50';
                // Здесь можно добавить логику добавления в корзину
            }
        });
    });
});
