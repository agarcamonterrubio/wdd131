
function calculateWindChill(tempF, windMph) {
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windMph, 0.16) + 0.4275 * tempF * Math.pow(windMph, 0.16);
}

function showFooterDates() {
  const yearSpan = document.getElementById("currentYear");
  const lastModSpan = document.getElementById("lastModified");

  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  if (yearSpan) yearSpan.textContent = currentYear;
  if (lastModSpan) lastModSpan.textContent = lastModified;
}

function showWindChill() {
  const tempF = 45; 
  const windMph = 10; 

  const windChillSpan = document.getElementById("windChill");

  if (tempF <= 50 && windMph > 3) {
    const windChill = calculateWindChill(tempF, windMph);
    windChillSpan.textContent = windChill.toFixed(1) + "°F";
  } else {
    windChillSpan.textContent = "N/A";
  }
}

window.addEventListener("load", () => {
  showFooterDates();
  showWindChill();
});
