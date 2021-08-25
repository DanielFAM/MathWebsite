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
    const input = document.getElementById("SquareInput").value;
    const area = squareArea(input);
    alert(area);
}

function CalculateSquarePerimeter() {
    const input = document.getElementById("SquareInput").value;
    const perimeter = squarePerimeter(input);
    alert(perimeter);
}

//triangle actions
function CalculateTriangleArea() {
    const inputB = document.getElementById("TriangleInputB").value;
    const inputH = document.getElementById("TriangleInputH").value;
    const area = triangleArea(inputB,inputH);
    alert(area);
}

function CalculateTrianglePerimeter() {
    const input1 = Number(document.getElementById("TriangleInput1").value);
    const input2 = Number(document.getElementById("TriangleInput2").value);
    const input3 = Number(document.getElementById("TriangleInput3").value);
    const perimeter = trianglePerimeter(input1,input2,input3);
    alert(perimeter);
}

//circle actions
function CalculateCirclePerimeter() {
    const input = document.getElementById("CircleInput").value;
    const perimeter = circlePerimeter(input);
    alert(perimeter);
}

function CalculateCircleArea() {
    const input = document.getElementById("CircleInput").value;
    const area = circleArea(input);
    alert(area);
}

function CalculateTriangleHeight (){
    const input1 = document.getElementById("TriangleIInput1").value;
    const input2 = document.getElementById("TriangleIInput2").value;
    const input3 = document.getElementById("TriangleIInput3").value;
    const height = TriangleHeight(input1,input2,input3);
    alert(height);
}