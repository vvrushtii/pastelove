document.addEventListener("DOMContentLoaded", function () {
    const bookCover = document.getElementById("bookCover");
    const bookPages = document.getElementById("bookPages");
    const pages = document.querySelectorAll(".page");

    let currentPage = 0;

    // Show book pages when cover is clicked
    bookCover.addEventListener("click", function () {
        bookCover.style.display = "none";
        bookPages.style.display = "block";
        pages[currentPage].style.display = "block";
    });

    // Add event listener for keyboard arrow navigation
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight" && currentPage < pages.length - 1) {
            pages[currentPage].style.display = "none";
            currentPage++;
            pages[currentPage].style.display = "block";
        } else if (event.key === "ArrowLeft" && currentPage > 0) {
            pages[currentPage].style.display = "none";
            currentPage--;
            pages[currentPage].style.display = "block";
        }
    });
});
