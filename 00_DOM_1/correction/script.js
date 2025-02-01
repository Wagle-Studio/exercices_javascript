const htmlFixedNavbarOne = document.getElementById("fixedNavbarOne");
const htmlFixedNavbarTwo = document.getElementById("fixedNavbarTwo");
const htmlFixedNavbarThree = document.getElementById("fixedNavbarThree");

if (htmlFixedNavbarOne) {
  const fixedNavbarOneOffsetTop = htmlFixedNavbarOne.offsetTop;
  const fixedNavbarTwoOffsetTop = htmlFixedNavbarTwo.offsetTop;
  const fixedNavbarThreeOffsetTop = htmlFixedNavbarThree.offsetTop;

  const fixedNavbarOneHeight = htmlFixedNavbarOne.clientHeight;
  const fixedNavbarTwoHeight = htmlFixedNavbarTwo.clientHeight;

  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    if (window.scrollY > fixedNavbarOneOffsetTop) {
      htmlFixedNavbarOne.style.position = "fixed";
      htmlFixedNavbarOne.style.top = 0;
    } else {
      htmlFixedNavbarOne.style.position = "unset";
    }

    if (window.scrollY > fixedNavbarTwoOffsetTop) {
      htmlFixedNavbarTwo.style.position = "fixed";
      htmlFixedNavbarTwo.style.top = 0 + fixedNavbarOneHeight + "px";
    } else {
      htmlFixedNavbarTwo.style.position = "unset";
    }

    if (window.scrollY > fixedNavbarThreeOffsetTop) {
      htmlFixedNavbarThree.style.position = "fixed";
      htmlFixedNavbarThree.style.top =
        0 + fixedNavbarOneHeight + fixedNavbarTwoHeight + "px";
    } else {
      htmlFixedNavbarThree.style.position = "unset";
    }
  }
}
