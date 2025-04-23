document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navContainer = document.querySelector(".nav-container");
    const overlay = document.querySelector(".overlay");

    // Kiểm tra xem các phần tử có tồn tại không
    if (!menuIcon || !navContainer || !overlay) {
        console.error("Không tìm thấy một hoặc nhiều phần tử: menu-icon, nav-container, overlay");
        return;
    }

    // Hàm toggle menu
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

    // Đóng menu khi nhấn ra ngoài
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navContainer.contains(event.target)) {
            navContainer.classList.remove("nav-active");
            menuIcon.classList.remove("active");
            overlay.classList.remove("active");
        }
    });

    // Đóng menu khi nhấn vào overlay
    overlay.addEventListener("click", function () {
        navContainer.classList.remove("nav-active");
        menuIcon.classList.remove("active");
        overlay.classList.remove("active");
    });
});