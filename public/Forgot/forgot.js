window.addEventListener('load', () => {
    document.querySelector('.container.flex_row').style.display = 'none';
    document.querySelector('.loader.flex_row.justify_center.center').style.display = 'flex';
    
    setTimeout(() => {
        document.querySelector('.container.flex_row').style.display = 'flex';
        document.querySelector('.loader.flex_row.justify_center.center').style.display = 'none';
    }, 1000);
});