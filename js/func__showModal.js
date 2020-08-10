'use strict';

(function () {
  window.showModal = function (obj) {
    let win = obj.dataset.window;
    let modal = document.querySelector(win);
    modal.classList.toggle('show');
  }
}
)();

writeUsClose.addEventListener("click", () => { showModal.call(writeUsClose, writeUsClose) });
writeUsShow.addEventListener("click", () => { showModal.call(writeUsShow, writeUsShow) });

mapClose.addEventListener("click", () => { showModal.call(mapClose, mapClose) });
mapShow.addEventListener("click", () => { showModal.call(mapShow, mapShow) });