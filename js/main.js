const myCanvas = document.getElementById("my-canvas");

const init = () => {
  // Checking for support
  if (myCanvas.getContext) {
    console.log("Your browser support canvas...!");

    // 크기 설정
    myCanvas.width = 300;
    myCanvas.height = 150;

    var ctx = myCanvas.getContext("2d");

    ctx.fillStyle = "rgb(200,0,0)"; // 빨간색 상자
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)"; // 투명도가 0.5인 파란색 상자
    ctx.fillRect(30, 30, 50, 50);
  } else {
    console.log("Your browser doesn't support canvas...!");
  }
};
