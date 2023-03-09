//  seleccionamos los dos elementos que serán clickables
const toggleButton = document.getElementById("menu");
const navWrapper = document.getElementById("main-link");
/* 
    cada ves que se haga click en el botón 
    agrega y quita las clases necesarias 
    para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
	toggleButton.classList.toggle("close");
	navWrapper.classList.toggle("show");
});
/* 
    Cuándo se haga click fuera del contenedor de enlaces 
    el menú debe esconderse.
*/
navWrapper.addEventListener("click", (e) => {
	if (e.target.id === "main-link") {
		navWrapper.classList.remove("show");
		toggleButton.classList.remove("close");
	}
});

// reproductor
let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video iframe");
let title = document.querySelector(".main-video .title");

listVideo.forEach((video) => {
	video.onclick = () => {
		listVideo.forEach((vid) => vid.classList.remove("active"));

		video.classList.add("active");

		if (video.classList.contains("active")) {
			let src = video.children[0].getAttribute("src");

			mainVideo.src = src;

			let txt = iframe.children[1].innerHTML;

			title.innerHTML = txt;
		}
	};
});
