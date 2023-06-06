const btnMenu = document.getElementById('btnMenu');
const menuItem = document.getElementById('menuItem');




btnMenu.addEventListener('click',  () =>{
    menuItem.classList.toggle("hidden")
})