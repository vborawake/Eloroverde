const popup = document.querySelector('.popup.flex_column');
const details = document.querySelector('.details.popup.flex_column');
const right_section = document.querySelector('.right_section.flex_column');

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

// function showPopup(e) {
//     e.stopPropagation();
//     if (e.target.classList.contains('profile_img') || e.target.classList.contains('username')) {
//         if (e.currentTarget.nextElementSibling.style.transform === 'scaleY(0)' || e.currentTarget.nextElementSibling.style.transform === '') e.currentTarget.nextElementSibling.style.transform = 'scaleY(1)';
//         else e.currentTarget.nextElementSibling.style.transform = 'scaleY(0)';
//     }
// }

function showAddCouponCode(e, title) {
    if (title === 'edit') popup.querySelector('.header.flex_row.space_between.center p').innerHTML = 'Edit Coupon Code';
    else popup.querySelector('.header.flex_row.space_between.center p').innerHTML = 'Add Coupon Code';
    popup.style.display = 'flex';
    popup.style.top = `${ window.scrollY + 50 }px`;
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
    });
}

function showDetails(e, element) {
    e.stopPropagation();
    // User clicks on manage coupon code button
    if (element === 'screen_2') {
        right_section.children[1].style.display = 'none';
        right_section.children[2].style.display = 'none';
        right_section.children[3].style.display = 'none';
        right_section.children[4].style.display = 'none';
        right_section.children[5].style.display = 'flex';
    } else if (element === 'screen_1') {
        right_section.children[1].style.display = 'flex';
        right_section.children[2].style.display = 'flex';
        right_section.children[3].style.display = 'flex';
        right_section.children[4].style.display = 'flex';
        right_section.children[5].style.display = 'none';
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