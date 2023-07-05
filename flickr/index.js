const sc = screen.width;
const mobile = document.querySelectorAll(".mobile");

let i = 0;
if (sc < 450) {
  mobile.forEach((e) => {
    e.remove();
  });
}
