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

async function showDetails(e, element) {
    e.stopPropagation();
    if (element === 'edit_category') {
        const element = document.querySelector('.edit_category.flex_column');
        element.style.display = 'flex';
        setTimeout(() => { element.style.transform = 'scale(1)'; });
        element.querySelector('h1').innerHTML = 'Edit Category';
        element.querySelector('.input.flex_column:nth-child(2) input').placeholder = e.currentTarget.parentElement.parentElement.querySelector('p:nth-child(2)').innerHTML;
    } else if (element === 'add_category') {
        const element = document.querySelector('.edit_category.flex_column');
        element.style.display = 'flex';
        setTimeout(() => { element.style.transform = 'scale(1)'; });
        element.querySelector('h1').innerHTML = 'Add Category';
    } else if (element === 'category') {
        // Show first sub category
        const productDetails = document.querySelector('#products');
        // Set name of category on header
        productDetails.querySelector('h1').innerHTML = `Back &gt; List Of ${ e.currentTarget.innerText } Products`;
        // Hide main category screen
        productDetails.previousElementSibling.style.display = 'none';
        // Show first subcategory screen
        productDetails.style.display = 'flex';
        // Animation
        gsap.from('.first_subcategory #product_details_table_stagger', {
            y: '-2rem',
            opacity: 0,
            stagger: 0.3
        });
    } else if (element === 'back') {
        // If user clicks on back
        // Hide Everything on screen
        Array.from(right_section.children).forEach(child => { child.style.display = 'none' });
        // If user clicks on back from edit / add product screen show products screen
        if (e.currentTarget.innerText.trim() === 'Back > Edit Product' || e.currentTarget.innerText.trim() === 'Back > Add Product') {
            document.querySelector('.header.flex_row.center.space_between').style.display = 'flex';
            right_section.children[6].style.display = 'flex';
            document.querySelector('.footer').style.display = 'flex';
            await gsap.from('.third_category #product_details_table_stagger', {
                y: '-2rem',
                opacity: 0,
                stagger: 0.3
            });
        } else if (e.currentTarget.parentElement.parentElement.id === 'brands_table') {
            // If user clicks back from brands table
            document.querySelector('.header.flex_row.center.space_between').style.display = 'flex';
            right_section.children[3].style.display = 'flex';
            right_section.children[6].style.display = 'flex';
            await gsap.from('#brand_table_stagger', {
                y: '-2rem',
                opacity: 0,
                delay: 0.5,
                stagger: 0.3
            });
        } else if (e.currentTarget.parentElement.parentElement.classList.contains('first_subcategory')) {
            // If user clicks on back from first subcategory table
            document.querySelector('.header.flex_row.center.space_between').style.display = 'flex';
            right_section.children[3].style.display = 'flex';
            document.querySelector('.footer').style.display = 'flex';
        } else if (e.currentTarget.parentElement.parentElement.classList.contains('second_category')) {
            // If user clicks on back from second subcategory table
            document.querySelector('.header.flex_row.center.space_between').style.display = 'flex';
            right_section.children[4].style.display = 'flex';
            document.querySelector('.footer').style.display = 'flex';
        } else if (e.currentTarget.parentElement.parentElement.classList.contains('third_category')) {
            // If user clicks on back from products table
            document.querySelector('.header.flex_row.center.space_between').style.display = 'flex';
            right_section.children[5].style.display = 'flex';
            document.querySelector('.footer').style.display = 'flex';
        }
    } else if (element === 'second_category') {
        // Hide first category
        document.querySelector('#products').style.display = 'none';
        // Show second category
        document.querySelector('.second_category').style.display = 'flex';
        // Set name of category to header
        document.querySelector('.second_category h1').innerHTML = `Back &gt; List Of ${ e.currentTarget.innerText } Products`;
        // Animate
        gsap.from('.second_category #product_details_table_stagger', {
            y: '-2rem',
            opacity: 0,
            stagger: 0.3
        });
    } else if (element === 'third_category') {
        // Hide second category
        document.querySelector('#products.second_category').style.display = 'none';
        // Show third category
        document.querySelector('.third_category').style.display = 'flex';
        // Set name of category to header
        document.querySelector('.third_category h1').innerHTML = `Back &gt; List Of ${ e.currentTarget.innerText } Products`;
        // Animate
        gsap.from('.third_category #product_details_table_stagger', {
            y: '-2rem',
            opacity: 0,
            stagger: 0.3
        });
    } else if (element === 'product_details') {
        // Hide everything on screen
        Array.from(right_section.children).forEach(child => { child.style.display = 'none' });
        // If User has clicked on add new product button
        if (e.currentTarget.innerText === 'Add New Product') right_section.children[9].querySelector('.header p').innerHTML = 'Back &gt; Add Product';
        // If user has clicked on edit product button (yellow pencil)
        else {
            right_section.children[9].querySelector('.header p').innerHTML = 'Back &gt; Edit Product';
            // For products table
            if (e.currentTarget.parentElement.parentElement.parentElement.id === 'products') {
                document.querySelector('#name').value = e.currentTarget.parentElement.parentElement.querySelector('p:nth-child(2)').innerHTML;
                document.querySelector('#sku').value = e.currentTarget.parentElement.parentElement.querySelector('p:nth-child(6)').innerHTML;
                document.querySelector('#purchase_price').value = e.currentTarget.parentElement.parentElement.querySelector('p:nth-child(5)').innerHTML;
                document.querySelector('#details').value = e.currentTarget.parentElement.parentElement.querySelector('.product_detail p').innerHTML;
            } else {
                // For brands table
                document.querySelector('#name').value = e.currentTarget.parentElement.parentElement.querySelector('p:nth-child(2)').innerHTML;
            }
        }
        // Show edit product / edit brand screen
        right_section.children[9].style.display = 'flex';
        setTimeout(() => {
            right_section.children[9].style.transform = 'scale(1)';
        });
    } else if (element === 'brands') {
        // When user clicks on brands tab hide the main products table and show main brands table
        document.querySelector('.products.width_full').style.display = 'none';
        document.querySelector('.brands.width_full').style.display = 'flex';
        // Highlight the selected tab
        e.currentTarget.classList.add('active');
        e.currentTarget.previousElementSibling.classList.remove('active');
        // Show 'add new brand' button
        document.querySelector('#brands').style.display = 'block';
        // Hide 'add new product' button
        document.querySelector('#category').style.display = 'none';
        await gsap.from('#brand_table_stagger', {
            y: '-2rem',
            opacity: 0,
            delay: 0.5,
            stagger: 0.3
        });
    } else if (element === 'products') {
        // When user clicks on brands tab show the main products table and hide main brands table
        document.querySelector('.products.width_full').style.display = 'block';
        document.querySelector('.brands.width_full').style.display = 'none';
        // Highlight the selected tab
        e.currentTarget.classList.add('active');
        e.currentTarget.nextElementSibling.classList.remove('active');
        // Hide 'add new brand' button
        document.querySelector('#brands').style.display = 'none';
        // Show 'add new product' button
        document.querySelector('#category').style.display = 'block';
        await gsap.from('#product_table_stagger', {
            y: '-2rem',
            opacity: 0,
        });
    } else if (element === 'add_brand') {
        // Show add brand popup
        const element = document.querySelector('.edit_category.edit_brand.flex_column');
        element.style.display = 'flex';
        setTimeout(() => { element.style.transform = 'scale(1)'; });
        element.querySelector('h1').innerHTML = 'Add Brand';
        document.querySelector('#image_input').style.display = 'none';
        // If user clicks on yellow pencil button then change the title to Edit brand
        if (e.currentTarget.parentElement.classList.contains('action')) {
            element.querySelector('h1').innerHTML = 'Edit Brand';
            document.querySelector('#image_input').style.display = 'flex';
        }
    } else if (element === 'brand') {
        // show sub brand screen
        Array.from(right_section.children).forEach(child => { child.style.display = 'none' });
        const brands = document.getElementById('brands_table');
        brands.querySelector('.appointments_header h1').innerHTML = `Back &gt; List Of All ${ e.currentTarget.innerHTML } Products`;
        brands.style.display = 'flex';
        document.querySelector('.header.flex_row.center.space_between').style.display = 'flex';
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

    gsap.from('#product_table_stagger', {
        y: '-2rem',
        opacity: 0
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