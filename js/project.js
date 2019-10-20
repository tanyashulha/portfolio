//Load project on init

if(window.location.hash) {
    const projectId = window.location.hash.slice(1);
    const projectFrame = document.getElementById("project-iframe");
    const toggleViewButton = document.getElementById("toggle-view");
    projectFrame.setAttribute("src", `./projects/${projectId}/index.html`);
    
    if(window.innerWidth < 641) {
        toggleViewButton.style.display = "none";
    }
    
    toggleViewButton.addEventListener("click", () => {
        projectFrame.classList.toggle("adaptive-iframe");
        toggleViewButton.innerHTML =
        (toggleViewButton.innerHTML === 'Mobile') ? toggleViewButton.innerHTML = 'Desktop' : toggleViewButton.innerHTML = 'Mobile';
    })  
}

