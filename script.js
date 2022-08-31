
const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

toggle.onclick = () => {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('sidebar-show-hide');
}

document.onclick = (e) => {
    if (e.target.id !== "toggle" && e.target.id !== "sidebar-show-hide") {
        toggle.classList.remove('active');
        sidebar.classList.remove('sidebar-show-hide');

    }
}


const outsideClick = () => {

}