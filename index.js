// Your code here

let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  // let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(dodger.style.left, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
    // let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(dodger.style.left, 10);
  
    if (right < 400) {
      dodger.style.left = `${right + 1}px`;
    }
  }

function moveDodgerUp() {
    // let rightNumbers = dodger.style.left.replace("px", "");
    let up = parseInt(dodger.style.bottom, 10);
  
    if (up < 380) {
      dodger.style.bottom = `${up + 1}px`;
    }
  }

function moveDodgerDown() {
    // let rightNumbers = dodger.style.left.replace("px", "");
    let up = parseInt(dodger.style.bottom, 10);
  
    if (up > 0) {
      dodger.style.bottom = `${up - 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
    switch (e.key) {
      case "ArrowLeft":
        moveDodgerLeft();
        break;
      case "ArrowRight":
        moveDodgerRight();
        break;
      case "ArrowUp":
        moveDodgerUp();
        break;
      case "ArrowDown":
        moveDodgerDown();
        break;  
    }
  });
