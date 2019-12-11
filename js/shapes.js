window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  message = window.prompt('Message:');
  while (message.length >= 50) {
    console.log("Your message is too long. Keep it under 50 characters.");
  }
    const canvas = document.getElementById('student-canvas-1');
    const ctx = canvas.getContext('2d');
    ctx.font = '48px sans-serif'
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText(message, 30, 70, 994);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  const canvas = document.getElementById('student-canvas-2');
  const ctx = canvas.getContext('2d');
ctx.clearRect(0,0,canvas.width,canvas.height)
  do {
    var rectangleW = window.prompt('Width:');
    if (rectangleW == null) {
      break;
    }
    var rectangleH = window.prompt('Height:');
    if (rectangleW == null) {
      break;
    }
    var rectangleX = window.prompt('X:');
    if (rectangleX == null) {
      break;
    }
    var rectangleY = window.prompt('Y:');
    if (rectangleW == null) {
      break;
    }
  if (rectangleW > canvas.width || rectangleW < 1) {
      alert("Your width must be between 1 and 1024.")
  } if (rectangleH > canvas.height || rectangleH < 1) {
       alert("Your height must be between 1 and 512.")
  } if (rectangleX < 1 || rectangleX > 1024) {
       alert("Your x-coordinate must be between 1 and 1024.")
  } while (rectangleY < 1 || rectangleY > 512) {
       alert("Your y-coordinate must be between 1 and 512.")
  } while (isNaN(rectangleW) || isNaN(rectangleH) || isNaN(rectangleX) || isNaN(rectangleY)) {
       alert("One of your values is not a number.")
}
} while (rectangleW > canvas.width || rectangleW < 1 || rectangleH > canvas.height || rectangleH < 1 || rectangleX < 1 || rectangleX > 1024 || rectangleY < 1 || rectangleY > 512 || isNaN(rectangleW) || isNaN(rectangleH) || isNaN(rectangleX) || isNaN(rectangleY))
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.strokeRect(rectangleX, rectangleY, rectangleW, rectangleH);

  };
//to fix: won't draw :}

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const canvas = document.getElementById('student-canvas-3');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  do {
    var color = (prompt("Color: "))
    if (color == null) {
      break;
    }
    color = String(color)
    var color_case = color.toLowerCase()
    if (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow") {
      alert(color + " is not a supported color.")
    }
  } while (color_case != "green" && color_case != "black" && color_case != "blue" && color_case != "orange" && color_case != "purple" && color_case != "red" && color_case != "yellow")

  if (color != null) {
    ctx.fillStyle = color_case;
    ctx.fillRect(10, 10, 100, 50);
  }

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  const canvas = document.getElementById('student-canvas-4');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  do {
    var side1 = (prompt("Side 1:"));
    if (side1 == null) {
      break;
    }
    var side2 = (prompt("Side 2:"));
    if (side2 == null) {
      break;
    }
    var side3 = (prompt("Side 3:"));
    if (side3 == null) {
      break;
    }
    var hypotenuse = Math.max(side1, side2, side3)
    var height = Math.min(side1, side2, side3)
    var base = Math.sqrt(hypotenuse*hypotenuse - height*height)

    side1 = Number(side1)
    side2 = Number(side2)
    side3 = Number(side3)

    if (base*base + height*height != hypotenuse*hypotenuse || base == 0 || height == 0 || hypotenuse == 0 || side1+side2+side3-hypotenuse-height != base) {
      alert("That's not a valid right triangle.");
    }
    else if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("One of your sides is not a number.")
    }
    else if ( base > 1024 || height > 512 || hypotenuse > 1310720){
      alert("Your triangle won't fit on the canvas.")
  }
} while ((Math.floor(base)*Math.floor(base) + height*height != hypotenuse*hypotenuse) || isNaN(side2) || isNaN(side3) || base > 1024 || height > 512 || hypotenuse > 1310720 || base ==0 || height == 0 || hypotenuse == 0 )
if ((base*base + height*height == hypotenuse*hypotenuse) && (base <1024 && height < 512  && hypotenuse <1145) && (base != 0 && height != 0)  && (base != null && height != null && hypotenuse != null)) {
  height = height + 25
  base = base + 25
  ctx.beginPath();
  ctx.moveTo(25,25);
  ctx.lineTo(25, height);
  ctx.lineTo(25, 25);
  ctx.stroke();
}

}





/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 5 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 6 code here
};
