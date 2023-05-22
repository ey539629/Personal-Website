function openProjects() {
    menu.dataset.activeIndex = 0;
    projectMenu.dataset.activeIndex = 0;
    document.getElementById("project-menu").style.width = "100%";	//These are basically moving the sidebars into the page
    document.getElementById("menu").style.marginLeft  = "-100%";
    document.getElementById("menu-background-image").style.backgroundPositionX = "right";
}

function closeProjects() {
    menu.dataset.activeIndex = 0;
    projectMenu.dataset.activeIndex = 100;
    document.getElementById("project-menu").style.width = "0%";	  //These will move the sidebars outside the page
    document.getElementById("menu").style.marginLeft = "0%";
    document.getElementById("menu-background-image").style.backgroundPositionX = "left";
}