const wrapper = document.querySelector(".split-screen");
const topLayer = document.querySelector(".left");

wrapper.addEventListener("mousemove", splitsScreen);
wrapper.addEventListener("touchmove", splitsScreen);

function splitsScreen(e) {
  let x;
  if (e.type === "touchmove") {
    const touche = e.touches[0];
    x = touche.clientX;
  } else {
    x = e.clientX;
  }
  topLayer.style.width = x + "px";
}
/*

Split(["#split-0", "#split-1"], {
  minSize: 0,
});
*/
