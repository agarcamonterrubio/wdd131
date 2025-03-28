document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-icon");
    if (hamburger) {
        console.log('Hamburger icon found');
        const navList = document.getElementById("nav-list");
        hamburger.addEventListener("click", function () {
            console.log('Hamburger clicked');
            navList.classList.toggle("open");
        });
    } else {
        console.log('Hamburger icon not found');
    }

    const currentYear = new Date().getFullYear();
    document.querySelector("footer p:first-of-type").innerHTML = `&copy; ${currentYear} | Alma Fernanda Garcia Monterrubio | Hidalgo`;

    const lastModifiedDate = document.lastModified;
    document.querySelector("#lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
});
