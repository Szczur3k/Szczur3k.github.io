const ridingDudu = document.getElementById("ridingDudu");

document.addEventListener("DOMContentLoaded", function () {
  rideDudu();
});

function rideDudu() {
  gsap.fromTo(
    "#ridingDudu",
    { x: "-100%" },
    {
      duration: 6,
      x: "500%",
      ease: "power1.inOut",
      onComplete: function () {
        changeDuduToWalk();
      },
    }
  );
}

function walkDudu() {
  gsap.fromTo(
    "#ridingDudu",
    { x: "530%" },
    {
      x: "200%",
      duration: 6,
      ease: "power1.inOut",
      onComplete: function () {
        askToBeValentine();
      },
    }
  );
}

function askToBeValentine() {
  ridingDudu.src = "assets/duduAsk.png";
  createDelayOpacity(".delayAsk", 1000);
  createDelayOpacity(".delayAnswer", 3000);
}

function changeDuduToWalk() {
  ridingHeight = ridingDudu.height;
  ridingDudu.src = "assets/walkingDudu.gif";
  ridingDudu.style.height = `${ridingHeight} - 100px`;

  ridingDudu.onload = function () {
    walkDudu();
    ridingDudu.onload = null;
  };
}

function createDelayOpacity(elementId, time) {
  setTimeout(function () {
    gsap.to(`${elementId}`, {
      duration: 5,
      opacity: 1,
    });
  }, time);
}

function createMovingObject(image, durationTime, whereX) {
  gsap.to(`${image}`, {
    duration: durationTime,
    x: whereX,
    ease: "power1.inOut",
  });
}
