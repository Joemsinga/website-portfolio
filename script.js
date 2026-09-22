function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// DARK MODE TOGGLE

function toggleTheme(){
    const currentTheme = document.body.getAttribute("data-theme");
    if(currentTheme === "dark"){
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
}

function loadTheme(){
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme){
        document.body.setAttribute("data-theme", savedTheme);
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.setAttribute("data-theme", "dark");
    }
}

loadTheme();
