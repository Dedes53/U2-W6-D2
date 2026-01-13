// bottoni
const saldiBtn = document.getElementById("saldiSec");
const welcomeBtn = document.getElementById("welcomeSec");
// section
const saldiSection = document.getElementById("saldi");
const welcomeSection = document.getElementById("welcome-summer");
// testi
const showText = "Mostra sezione"
const hideText = "Nascondi Sezione"



saldiBtn.addEventListener("click", () => {
    if (saldiSection.style.display !== "none") {
        saldiSection.style.display = "none";
        saldiBtn.textContent = showText;
    } else {
        saldiSection.style.display = "flex";
        saldiBtn.textcontent = hideText;
    }
})

welcomeBtn.addEventListener("click", () => {
    if (welcomeSection.style.display !== "none") {
        welcomeSection.style.display = "none";
        welcomeBtn.textContent = showText;
    } else {
        welcomeSection.style.display = "flex";
        welcomeBtn.textcontent = hideText;
    }
})