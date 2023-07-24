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
        gsap.from('#product_table_stagger', {
            y: '-2rem',
            opacity: 0,
            delay: 0.5,
            stagger: 0.3
        });
    } else if (element === 'back') {
        // If user clicks on back
        // Hide table and pagination
        Array.from(right_section.children).forEach(child => { child.style.display = 'none' });
        console.log(e.currentTarget.innerText.trim());
        if (e.currentTarget.innerText.trim() === 'Back > Edit Product' || e.currentTarget.innerText.trim() === 'Back > Add Product') {
            right_section.children[2].style.display = 'flex';
            right_section.children[4].style.display = 'flex';
            right_section.children[6].style.display = 'flex';
        } else if (e.currentTarget.parentElement.parentElement.parentElement.id === 'brands_table') {
            right_section.children[2].style.display = 'flex';
            right_section.children[5].style.display = 'flex';
            right_section.children[6].style.display = 'flex';
        } else {
            right_section.children[2].style.display = 'flex';
            right_section.children[3].style.display = 'flex';
            right_section.children[6].style.display = 'flex';
            gsap.from('#table_stagger', {
                y: '-2rem',
                opacity: 0,
                delay: 0.5,
                stagger: 0.3
            });
        }
    } else if (element === 'product_details') {
        Array.from(right_section.children).forEach(child => { child.style.display = 'none' });
        right_section.children[7].style.display = 'flex';
        setTimeout(() => {
            right_section.children[7].style.transform = 'scale(1)';
        });
    } else if (element === 'brands') {
        document.querySelector('.products.width_full').style.display = 'none';
        document.querySelector('.brands.width_full').style.display = 'flex';
        e.currentTarget.classList.add('active');
        e.currentTarget.previousElementSibling.classList.remove('active');
        document.querySelector('#brands').style.display = 'block';
        document.querySelector('#category').style.display = 'none';
        gsap.from('#brand_table_stagger', {
            y: '-2rem',
            opacity: 0,
            delay: 0.5,
            stagger: 0.3
        });
    } else if (element === 'products') {
        document.querySelector('.products.width_full').style.display = 'block';
        document.querySelector('.brands.width_full').style.display = 'none';
        e.currentTarget.classList.add('active');
        e.currentTarget.nextElementSibling.classList.remove('active');
        document.querySelector('#brands').style.display = 'none';
        document.querySelector('#category').style.display = 'block';
        gsap.from('#table_stagger', {
            y: '-2rem',
            opacity: 0,
            delay: 0.5,
            stagger: 0.3
        });
    } else if (element === 'add_brand') {
        const element = document.querySelector('.edit_category.edit_brand.flex_column');
        element.style.display = 'flex';
        setTimeout(() => { element.style.transform = 'scale(1)'; });
        element.querySelector('h1').innerHTML = 'Add Brand';
        document.querySelector('#image_input').style.display = 'none';
        if (e.currentTarget.parentElement.classList.contains('action')) {
            element.querySelector('h1').innerHTML = 'Edit Brand';
            document.querySelector('#image_input').style.display = 'flex';
        }
    } else if (element === 'brand') {
        Array.from(right_section.children).forEach(child => { child.style.display = 'none' });
        const brands = document.getElementById('brands_table');
        brands.querySelector('.appointments_header h1').innerHTML = `Back &gt; List Of All ${ e.currentTarget.innerHTML } Products`;
        brands.style.display = 'flex';
        right_section.children[2].style.display = 'flex';
        right_section.children[6].style.display = 'flex';
    }
}

function closeDetails(e, element) {
    // e.stopPropagation();
    if (element === 'edit_category') {
        const element = document.querySelector('.edit_category.flex_column');
        element.style.transform = 'scale(0)';
    } else if (element === 'edit_brand') {
        const element = document.querySelector('.edit_category.edit_brand.flex_column');
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

document.addEventListener('DOMContentLoaded', () => {
    addAnimations();
});

function addAnimations() {
    gsap.from('.sidebar', {
        x: '-4rem',
        opacity: 0,
        duration: 0.5
    });

    gsap.from('#stagger', {
        y: '-2rem',
        opacity: 0,
        stagger: 0.3
    });

    gsap.from('#table_stagger', {
        y: '-2rem',
        opacity: 0,
        delay: 0.5,
        stagger: 0.3
    });

    // gsap.from('#chart_stagger', {
    //     y: '-2rem',
    //     opacity: 0,
    //     delay: 1,
    //     stagger: 0.3
    // });

    // gsap.from('.order_details', {
    //     y: '-2rem',
    //     opacity: 0,
    //     duration: 0.5
    // });
}