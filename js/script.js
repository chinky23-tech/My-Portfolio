
// button click event to redirect to portfolio page
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("viewWork");
    if (button) {
        button.addEventListener("click", function () {
            window.location.href = "portfolio.html";
        });
    }
});
