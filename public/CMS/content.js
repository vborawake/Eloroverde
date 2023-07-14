const defaultSection = document.querySelector('.content.flex_column');
const splashScreen = document.querySelector('.splash_screen.flex_column');
const introductionScreen = document.querySelector('.introduction_screen.flex_column');
const termsConditions = document.querySelector('.terms_conditions.flex_column');
const categoryScreen = document.querySelector('.faq');

function showEditScreen(e, which) {
    console.log('Triggered');
    
    if (which === 'header') {
        console.log(e.currentTarget.querySelector('p').innerHTML);
        if (e.currentTarget.querySelector('p').innerHTML === 'Back &lt; FAQ &lt; Sign Up &amp; Login') {
            categoryScreen.style.display = 'block';
            splashScreen.style.display = 'none';
            introductionScreen.style.display = 'none';
            termsConditions.style.display = 'none';
            defaultSection.style.display = 'none';
            categoryScreen.querySelector('.screen_1.width_full').style.display = 'block';
            categoryScreen.querySelector('.screen_2.width_full').style.display = 'none';
            categoryScreen.querySelector('.screen_3.width_full').style.display = 'none';
            document.querySelector('.content_header.flex_row.space_between.center p').innerHTML = 'Back &lt; FAQ';
            document.querySelector('.content_header.flex_row.space_between.center button').innerHTML = 'Add New Category';
            return;
        }
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'flex';
        categoryScreen.style.display = 'none';
        e.currentTarget.querySelector('p').innerHTML = 'Content Management System';
        e.currentTarget.querySelector('button').style.display = 'none';
    } else if (which === 'splash') {
        splashScreen.style.display = 'flex';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'none';
        categoryScreen.style.display = 'none';
        // Change the heading value
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').innerHTML = 'Back &lt; Edit Splash Screen';
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('button').style.display = 'none';
    } else if (which === 'terms') {
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'flex';
        defaultSection.style.display = 'none';
        categoryScreen.style.display = 'none';
        // Change the heading value
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').innerHTML = 'Back &lt; Edit Terms & Conditions';
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('button').style.display = 'none';
    } else if (which === 'faq') {
        categoryScreen.style.display = 'block';
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'none';
        categoryScreen.querySelector('.screen_1.width_full').style.display = 'block';
        categoryScreen.querySelector('.screen_2.width_full').style.display = 'none';
        document.querySelector('.content_header.flex_row.space_between.center p').innerHTML = 'Back &lt; FAQ';
        document.querySelector('.content_header.flex_row.space_between.center button').style.display = 'block';
    } else if (which === 'signup') {
        categoryScreen.querySelector('.screen_1.width_full').style.display = 'none';
        categoryScreen.querySelector('.screen_2.width_full').style.display = 'block';
        document.querySelector('.content_header.flex_row.space_between.center p').innerHTML = 'Back &lt; FAQ &lt; Sign Up & Login';
        document.querySelector('.content_header.flex_row.space_between.center button').style.display = 'block';
        document.querySelector('.content_header.flex_row.space_between.center button').innerHTML = 'Add New Query';
    } else if (which === 'clinic') {
        categoryScreen.querySelector('.screen_1.width_full').style.display = 'none';
        categoryScreen.querySelector('.screen_2.width_full').style.display = 'none';
        categoryScreen.querySelector('.screen_3.width_full').style.display = 'block';
        document.querySelector('.header.flex_row.space_between p').innerHTML = 'Back &lt; Edit Category';
    } else {
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'flex';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'none';
        categoryScreen.style.display = 'none';
        // Change the heading value
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').innerHTML = `Back &lt; Edit Introduction Screen ${ which === 'intro1' ? 1: which === 'intro2' ? 2 : 3 }`;
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('button').style.display = 'none';
    }
}

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function showPopup2 (e) {
    e.stopPropagation();
    if (e.currentTarget.innerHTML === 'Add New Category') {
        document.querySelector('.edit_category.flex_column').style.display = 'flex';
        document.querySelector('.edit_category.flex_column h1').innerHTML = 'Add Category';
    } else if (e.currentTarget.innerHTML === 'Add New Query') {
        document.querySelector('.edit_query.flex_column').style.display = 'flex';
        document.querySelector('.edit_query.flex_column h1').innerHTML = 'Add Query';
    }
}