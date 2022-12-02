window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__item");
  const hamburger = document.querySelector(".hamburger");
  const range = document.querySelector(".range");
  const rangeOut = document.querySelector(".range_out");
  const title = document.querySelector(".main__title");
  const select = document.querySelector(".select");
  const selectCurrent = document.querySelector(".select__current");
  const selectItem = document.querySelectorAll(".select__item");
  const inputFile = document.querySelector(".input-file");
  const inputText = document.querySelector(".file-label span");
  const inputImg = document.querySelector(".file-label img");
  const body = document.querySelector("body");

  title.classList.add("main__title-active");


  // функция открытия гамбургера
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__item-active");
    body.classList.toggle("hidden");
  });

  //функция добавляет значение range в span
  range.addEventListener("mousemove", function () {
    rangeOut.innerHTML = range.value + " %";
  });


  //функция всплывающего хедера
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const main = document.querySelector(".main");

    if (window.scrollY > header.clientHeight * 3) {
      header.classList.add("header-fix");
      main.style.marginTop = `${header.clientHeight}px`;
    } else {
      header.classList.remove("header-fix");
      main.style.marginTop = 0;
    }
  });


  //функция изменяющая текст инпут файла, добавляет название добавленного файла
  inputFile.addEventListener("change", function () {
    inputImg.classList.add("hidden");
    switch (inputFile.files.length) {
      case 1:
        inputText.innerHTML = `${inputFile.files[0].name} загружен`;
        break;
      case 2:
      case 3:
      case 4:
        inputText.innerHTML = `Было загруженно ${inputFile.files.length} файла`;
        break;
      default:
        inputText.innerHTML = `Было загруженно ${inputFile.files.length} файлов`;
        break;
    }
  });


  //функция dropdown меняющая текст на выбранный пункт 
  selectItem.forEach((item) => {
    item.addEventListener("click", function () {
      let text = this.innerHTML;
      selectCurrent.innerHTML = text;
    });
  });

  select.addEventListener("click", function () {
    select.classList.toggle("select-active");
  });
});
