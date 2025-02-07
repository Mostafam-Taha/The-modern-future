document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".home").classList.add("loaded");
    }, 300);
});



document.getElementById('menu-icon').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    var navList = document.getElementById('nav-list');
    var menuIcon = document.getElementById('menu-icon');
    if (event.target !== menuIcon && !navList.contains(event.target)) {
        navList.classList.remove('active');
    }
});

document.getElementById('close-icon').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.remove('active');
});