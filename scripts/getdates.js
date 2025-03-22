const currentYear = new Date().getFullYear();

document.querySelector("footer p:first-of-type").innerHTML = `&copy; ${currentYear} | Alma Fernanda Garcia Monterrubio | Hidalgo`;

const lastModifiedDate = document.lastModified;

document.querySelector("footer p:last-of-type").innerHTML = `Last modification: ${lastModifiedDate}`;
