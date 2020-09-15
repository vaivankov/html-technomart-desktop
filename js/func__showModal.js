"use strict";

window.showModal = function (obj) {
	let win = obj.dataset.window;
	let modal = document.querySelector(win);
	modal.classList.toggle("show");
};

writeUsClose.addEventListener("click", () => {
	showModal.call(writeUsClose, writeUsClose);
});
writeUsShow.addEventListener("click", () => {
	showModal.call(writeUsShow, writeUsShow);
});

mapClose.addEventListener("click", () => {
	showModal.call(mapClose, mapClose);
});
mapShow.addEventListener("click", () => {
	showModal.call(mapShow, mapShow);
});

orderClose.addEventListener("click", () => {
	showModal.call(orderClose, orderClose);
});
orderContinue.addEventListener("click", () => {
	showModal.call(orderContinue, orderContinue);
});
