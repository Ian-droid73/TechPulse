const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const extraContent = this.nextElementSibling;
        if (extraContent.style.display === "block") {
            extraContent.style.display = "none";
            this.textContent = "Read Details";
        } else {
            extraContent.style.display = "block";
            this.textContent = "Hide Details";
        }
    });
});

function showAlert() {
    alert("Welcome to the Future of Tech!");
}