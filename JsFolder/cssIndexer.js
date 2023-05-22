const menu = document.getElementById("menu");
Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });


const projectMenu = document.getElementById("project-menu");
Array.from(document.getElementsByClassName("project-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            projectMenu.dataset.activeIndex = index;
        }
    });