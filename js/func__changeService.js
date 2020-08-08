'use strict';

(function () {
  window.changeService = function () {
    serviceBookmarkImage.src = this.dataset.src;
    serviceBookmarkTitle.innerHTML = this.dataset.title;
    serviceBookmarkTitleExplanation.innerHTML = this.dataset.titleExplanation;
  }
}
)();

for (let i of serviceRadioAll) {
  i.addEventListener("click", changeService)
}