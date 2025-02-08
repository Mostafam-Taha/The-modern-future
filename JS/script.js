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

function sendToWhatsApp(button) {
    var card = button.closest('.card'); // تحديد البطاقة التي تم النقر عليها
    var productName = card.querySelector('h4').innerText; // اسم المنتج
    var productImage = card.querySelector('img').src; // رابط الصورة
    var currentDate = new Date().toLocaleDateString('ar-EG'); // التاريخ الحالي

    var message = `🔹 *طلب منتج جديد* 🔹\n\n` +
                  `📌 *اسم المنتج:* ${productName}\n` +
                  `📅 *تاريخ الطلب:* ${currentDate}\n\n` +
                  `🖼 *صورة المنتج:* (يرجى فتح الرابط لمشاهدة الصورة)\n${productImage}`;

    var phoneNumber = "201126462182"; // رقم الواتساب المستهدف
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank'); // فتح الرابط في نافذة جديدة
}