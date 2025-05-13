document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navContainer = document.querySelector(".nav-container");
    const overlay = document.querySelector(".overlay");

    // Kiểm tra xem các phần tử có tồn tại không
if (!menuIcon || !navContainer || !overlay) {
    console.error("Không tìm thấy một hoặc nhiều phần tử: menu-icon, nav-container, overlay");
    return;
}
    // Hàm toggle menu chính
function toggleMenu() {
    navContainer.classList.toggle("nav-active");
    menuIcon.classList.toggle("active");
    overlay.classList.toggle("active");
}

    // Gắn sự kiện click cho menu icon
menuIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
});

// Dropdown "Khoa" (cho mobile)
const dropdownBtns = document.querySelectorAll('.nav-links .dropdown > .dropbtn');
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});
    

   // Đóng menu con khi click ra ngoài
document.addEventListener("click", function (event) {
    // menu chính
    if (!menuIcon.contains(event.target) && !navContainer.contains(event.target)) {
        navContainer.classList.remove("nav-active");
        menuIcon.classList.remove("active");
        overlay.classList.remove("active");
    }
    // đóng dropdown nếu mở
    dropdownBtns.forEach(btn => {
        const dd = btn.parentElement;
        if (dd.classList.contains('active') && !dd.contains(event.target)) {
            dd.classList.remove('active');
        }
    });
});
    

    // Đóng menu khi nhấn vào overlay
    overlay.addEventListener("click", function () {
        navContainer.classList.remove("nav-active");
        menuIcon.classList.remove("active");
        overlay.classList.remove("active");
    });
});