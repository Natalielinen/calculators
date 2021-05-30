/******Square area and perimeter*******/

//Find elements
let squareSide = document.getElementById("square-side");
let answerSquareArea = document.getElementById("square-area-result");
let answerSquarePerimeter = document.getElementById("square-perimeter-result");
let squareBtn = document.getElementById("square-btn");


//Calculate square function
function calculateSquare () {
    let side = squareSide.value;
    answerSquareArea.innerHTML = side**2;
    answerSquarePerimeter.innerHTML = side*4;
    squareSide.value = '';
}


//Button event listener
squareBtn.addEventListener('click', calculateSquare);

/******Rectancle area and perimeter*******/

let rectWidthSide = document.getElementById("rect-width-side");
let rectHeightSide = document.getElementById("rect-height-side");
let answerRectArea = document.getElementById("rect-area-answer");
let answerRectPerimeter = document.getElementById("rect-perimeter-answer");
let rectBtn = document.getElementById("rect-btn");

//Calculate rectancle function
function calculateRectancle () {
    let widthSide = rectWidthSide.value;
    let heightSide = rectHeightSide.value;

    answerRectArea.innerHTML = widthSide*heightSide;
    answerRectPerimeter.innerHTML = (parseFloat(widthSide)+parseFloat(heightSide))*2;

    rectWidthSide.value = '';
    rectHeightSide.value = '';   
}

rectBtn.addEventListener('click', calculateRectancle);


/******Circle area and perimeter*******/

let radiusInput = document.getElementById("radius");
let answerCircleArea = document.getElementById("answer-circle-area");
let answerCirclePerimeter = document.getElementById("answer-circle-perimeter");
let circleBtn = document.getElementById("circle-btn");

function calculateCircle () {
    let radius = radiusInput.value;

    answerCircleArea.innerHTML = Math.PI * (radius**2);
    answerCirclePerimeter.innerHTML = 2*Math.PI*radius;

    radiusInput.value = '';
}

circleBtn.addEventListener('click', calculateCircle);

/******Triangle area*******/

let sideAInput = document.getElementById("side-a");
let sideBInput = document.getElementById("side-b");
let sideCInput = document.getElementById("side-c");
let triangleAreaAnswer = document.getElementById("triangle-answer");
let triangleBtn = document.getElementById("triangle-btn");

function calculateTriangle () {
    let sideA = sideAInput.value;
    let sideB = sideBInput.value;
    let sideC= sideCInput.value;
    let halfPerimetr = (parseFloat(sideA)+parseFloat(sideB)+parseFloat(sideC))/2;

    triangleAreaAnswer.innerHTML = Math.sqrt(halfPerimetr*(halfPerimetr-sideA)*(halfPerimetr-sideB)*(halfPerimetr-sideC));

    sideAInput.value = '';
    sideBInput.value = '';
    sideCInput.value = '';
}

triangleBtn.addEventListener('click', calculateTriangle);















