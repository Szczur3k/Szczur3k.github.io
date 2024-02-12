document.addEventListener("DOMContentLoaded", function () {
  function adjustContentPosition() {
    var animationHeight = document.getElementById("ridingDudu").offsetHeight;
    var contentBelow = document.getElementById("containerButtons");
    if (contentBelow) {
      contentBelow.style.marginTop = animationHeight + 200 + "px";
    }
  }

  adjustContentPosition();
});
