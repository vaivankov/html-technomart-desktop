'use strict';

(function () {
  window.changeSlide = function () {
    sliderImage.src = this.dataset.url;
    sliderTitle.innerHTML = this.dataset.title;
    sliderTitleExplanation.innerHTML = this.dataset.titleExplanation;
  }
}
)();

for (let i of sliderRadioAll) {
  i.addEventListener("click", changeSlide)
}