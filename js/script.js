function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
}

// Attach an event handler to a click on the burger menu
document.querySelector('.burger').addEventListener('click', toggleMenu);