const cloudWrap = document.querySelector(".cloud-wrap");
const main = document.querySelector(".main");

cloudWrap.addEventListener("click", () => {
  cloudWrap.classList.add("expand");

  setTimeout(() => {
    main.classList.add("active");
  }, 1000); // 구름 확대 & 텍스트 fade-out 후 표시
});
