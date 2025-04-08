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
  const footerText = document.querySelector("footer p:first-of-type");
  if (footerText) {
      footerText.innerHTML = `&copy; ${currentYear} | Alma Fernanda Garcia Monterrubio | Hidalgo`;
  }

  const lastModifiedDate = document.lastModified;
  const lastModifiedElement = document.querySelector("#lastModified");
  if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
  }

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        templeName: "París, France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area:  44175,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054-thumb.jpg"
      },
      {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 30",
        area: 72000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
      },
      {
        templeName: "Kona Hawaii",
        location: "Kailua Kona, Hawaii, United States",
        dedicated: "2000, January, 24",
        area: 12325,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg"
      },

      {
        templeName: "Hermosillo Sonora ",
        location: "Hermosillo, Sonora, Mexico",
        dedicated: "2000, February, 27",
        area: 10769,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/hermosillo-sonora-mexico-temple/hermosillo-sonora-mexico-temple-20644-main.jpg"
      },

      {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1964, November, 19",
        area: 80157,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg"
      },
  ];

  function displayTemples(temples) {
      const container = document.getElementById("temple-images");
      if (!container) {
          console.log('Container for temples not found!');
          return;
      }
      container.innerHTML = ""; 

      temples.forEach(temple => {
          const card = document.createElement("section");

          const name = document.createElement("h3");
          name.textContent = temple.templeName;

          const location = document.createElement("p");
          location.textContent = `Location: ${temple.location}`;

          const dedication = document.createElement("p");
          dedication.textContent = `Dedicated: ${temple.dedicated}`;

          const area = document.createElement("p");
          area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

          const img = document.createElement("img");
          img.src = temple.imageUrl;
          img.alt = temple.templeName;
          img.loading = "lazy";

          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedication);
          card.appendChild(area);
          card.appendChild(img);

          container.appendChild(card);
      });
  }

  function filterOld() {
      console.log('Filtering Old Temples');
      displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
  }

  function filterNew() {
      console.log('Filtering New Temples');
      displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
  }

  function filterLarge() {
      console.log('Filtering Large Temples');
      displayTemples(temples.filter(t => t.area > 90000));
  }

  function filterSmall() {
      console.log('Filtering Small Temples');
      displayTemples(temples.filter(t => t.area < 10000));
  }

  function showAll() {
      console.log('Showing All Temples');
      displayTemples(temples);
  }

  const filterButtons = [
      { selector: "#home", func: showAll },
      { selector: "#old", func: filterOld },
      { selector: "#new", func: filterNew },
      { selector: "#large", func: filterLarge },
      { selector: "#small", func: filterSmall }
  ];

  filterButtons.forEach(button => {
      const btn = document.querySelector(button.selector);
      if (btn) {
          btn.addEventListener("click", button.func);
      }
  });

  showAll();
});
