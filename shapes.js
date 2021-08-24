//square code
function squarePerimeter (squareSide){
    return squareSide * 4;
}

function squareArea (squareSide) {
    return squareSide * squareSide;
}

//tringle code
function trianglePerimeter (Side1, Side2, Side3){
    return Side1 + Side2 + Side3;
}

function triangleArea (base, height) {
    return (base * height) / 2;
}

function TriangleHeight (Side1, Side2, Side3){
    let a,b=0;
    let res='';
    if (Side1 == Side2) {
        a = Side1;
        b = Side3;
        res = Math.sqrt((a**2)-((b**2)/4));
    }
    else if (Side2 == Side3) {
        a = Side2;
        b = Side1;
        res = Math.sqrt((a**2)-((b**2)/4));
    }
    else if (Side3 == Side1) {
        a = Side3;
        b = Side2;
        res = Math.sqrt((a**2)-((b**2)/4));
    }
    else{
        res = 'No es un triangulo Isoceles';
    }

    return res;
}
   

//circle code
function circleDiameter (radius){
    return radius * 2;
}

function circlePerimeter (radius){
    const diameter = circleDiameter(radius);
    return diameter * Math.PI;
}

function circleArea (radius) {
    return (radius ** 2) * Math.PI;
}


//square actions
function CalculateSquareArea() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const area = squareArea(value);
    alert(area);
}

function CalculateSquarePerimeter() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

//triangle actions
function CalculateTriangleArea() {
    const inputB = document.getElementById("TriangleInputB");
    const inputH = document.getElementById("TriangleInputH");

    const valueB = inputB.value;
    const valueH = inputH.value;

    const area = triangleArea(valueB,valueH);
    alert(area);
}

function CalculateTrianglePerimeter() {
    const input1 = document.getElementById("TriangleInput1");
    const input2 = document.getElementById("TriangleInput2");
    const input3 = document.getElementById("TriangleInput3");

    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimeter = trianglePerimeter(value1,value2,value3);
    alert(perimeter);
}

//circle actions
function CalculateCirclePerimeter() {
    const input = document.getElementById("CircleInput");
    const value = input.value;

    const perimeter = circlePerimeter(value);
    alert(perimeter);
}

function CalculateCircleArea() {
    const input = document.getElementById("CircleInput");
    const value = input.value;

    const area = circleArea(value);
    alert(area);
}

function CalculateTriangleHeight (){
    const input1 = document.getElementById("TriangleIInput1");
    const input2 = document.getElementById("TriangleIInput2");
    const input3 = document.getElementById("TriangleIInput3");

    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const height = TriangleHeight(value1,value2,value3);
    alert(height);
}