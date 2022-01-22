let menu_bar = document.querySelector('#menu_bar');
let navbar = document.querySelector('.navbar');


menu_bar.onclick = () =>{
	menu_bar.classList.toggle('fa-window-close');
	navbar.classList.toggle('active');
}

window.onscroll = () =>{
	menu_bar.classList.remove('fa-window-close');
	navbar.classList.remove('active');
}