const popup = document.querySelector('.popup.flex_column');

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function showDetails(e) {
    popup.style.display = 'flex';
    popup.style.top = `${ window.scrollY + 50 }px`;
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
    });
}

function closeDetails(e) {
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(0)';
    });
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}