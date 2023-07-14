const popup = document.querySelector('.popup.flex_column');
const details = document.querySelector('.details.popup.flex_column');
const right_section = document.querySelector('.right_section.flex_column');

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function showDetails(e) {
    e.stopPropagation();
    if (e.currentTarget.children[0].innerHTML === 'Back &gt; Order Details') {
        // If user clicks on back
        // Hide table and pagination
        right_section.children[1].style.display = 'flex';
        right_section.children[2].style.display = 'flex';
        // Show User details
        setTimeout(() => {
            right_section.children[3].style.display = 'none';
        });
        requestAnimationFrame(() => {
            details.style.transform = 'scale(0)';
        });
    } else {
        // If user clicks on eye
        // Hide table and pagination
        right_section.children[1].style.display = 'none';
        right_section.children[2].style.display = 'none';
        // Show User details
        setTimeout(() => {
            right_section.children[3].style.display = 'flex';
        });
        requestAnimationFrame(() => {
            details.style.transform = 'scale(1)';
        });
    }
}

function closeDetails(e) {
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(0)';
    });
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}