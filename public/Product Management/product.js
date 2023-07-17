const popup = document.querySelector('.edit_category.flex_column');
const details = document.querySelector('.details.popup.flex_column');
const right_section = document.querySelector('.right_section.flex_column');

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('#menu').style.transform === 'scaleY(1)') document.querySelector('#menu').style.transform = 'scaleY(0)';
    if (document.querySelector('#language').style.transform === 'scaleY(1)') {
        document.querySelector('#language').style.transform = 'scaleY(0)';
        document.querySelector('#language').style.top = '50%';
    }
});

function showDetails(e, element) {
    e.stopPropagation();
    if (element === 'edit_category') {
        const element = document.querySelector('.edit_category.flex_column');
        element.style.display = 'flex';
        setTimeout(() => { element.style.transform = 'scale(1)'; });
        element.querySelector('.input.flex_column:nth-child(2) input').placeholder = e.currentTarget.parentElement.parentElement.querySelector('p:nth-child(2)').innerHTML;
    } else if (element === 'add_category') {
        const element = document.querySelector('.edit_category.flex_column');
        element.style.display = 'flex';
        setTimeout(() => { element.style.transform = 'scale(1)'; });
        element.querySelector('h1').innerHTML = 'Add Category';
    } else if (element === 'category') {
        const productDetails = document.querySelector('#products');
        productDetails.previousElementSibling.style.display = 'none';
        productDetails.style.display = 'flex';
    } else if (element === 'back') {
        // If user clicks on back
        // Hide table and pagination
        right_section.children[0].style.display = 'none';
        right_section.children[1].style.display = 'flex';
        right_section.children[2].style.display = 'flex';
        right_section.children[3].style.display = 'none';
        right_section.children[5].style.display = 'none';
    } else if (element === 'product_details') {
        right_section.children[0].style.display = 'none';
        right_section.children[1].style.display = 'flex';
        right_section.children[2].style.display = 'none';
        right_section.children[3].style.display = 'none';
        right_section.children[4].style.display = 'none';
        right_section.children[5].style.display = 'flex';
        setTimeout(() => {
            right_section.children[5].style.transform = 'scale(1)';
        });
    }
}

function closeDetails(e, element) {
    // e.stopPropagation();
    if (element === 'edit_category') {
        const element = document.querySelector('.edit_category.flex_column');
        element.style.transform = 'scale(0)';
    } else {
        requestAnimationFrame(() => {
            popup.style.transform = 'scale(0)';
        });
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         details.style.transform = 'scale(1)';
//     });
//     right_section.children[4].style.display = 'flex';
//     // requestAnimationFrame(() => {
//     // });
// });