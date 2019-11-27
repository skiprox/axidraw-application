// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron');

class Renderer {
	constructor() {
		this.addListeners();
	}
	addListeners() {
		let ranges = [].slice.call(document.querySelectorAll('.input-range'));
		for (let i = 0; i < ranges.length; i++) {
			ranges[i].addEventListener('input', (e) => {
				let val = e.target.value;
				document.getElementById(e.target.getAttribute('name')).innerText = val;
			});
		}
	}
}

new Renderer();
