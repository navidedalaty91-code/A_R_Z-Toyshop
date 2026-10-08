const themeToggle = document.querySelector("#themeToggle");

// خواندن تم ذخیره‌شده
const savedTheme = document.cookie
    .split("; ")
    .find(row => row.startsWith("theme="))
    ?.split("=")[1];

// اعمال تم ذخیره‌شده
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
}

// تغییر تم
if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            document.cookie = "theme=dark; max-age=2592000; path=/";
            themeToggle.textContent = "☀️";
        } else {
            document.cookie = "theme=light; max-age=2592000; path=/";
            themeToggle.textContent = "🌙";
        }

    });
}