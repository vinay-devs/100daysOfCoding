const form = document.querySelector("form");
const urlYtb = document.querySelector("input");
const iframe = document.querySelector("iframe");
const btnMp3 = document.getElementById("downloadMp3");

function validVideoId(id) {
	let img = new Image();
	img.src = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
	img.onload = function () {
		checkThumbnail(this.width);
	}
}

function checkThumbnail(width) {
	if (width === 120) {
		alert("Error: Invalid video id");
		btnMp3.style.display = "none";
	}
}

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	iframe.src = `https://www.youtube.com/embed/${urlYtb.value}`;
	btnMp3.addEventListener("click", () => {
		const url = `https://www.yt-download.org/api/button/mp3?url=https://www.youtu.be/${urlYtb.value}`
		let win = window.open(url, '_blank');
		win.focus();
	});
	btnMp3.style.display = "block";

	if (validVideoId(urlYtb.value)) {
		btnMp3.style.display = "block";
	}

})

