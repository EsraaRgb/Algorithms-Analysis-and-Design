// calculating Trapezoid Area

// Algorithm A = 0.5 (Base1 * Base2) * Height

/*
    1- Read Base1, Base2, Height
    2- Calculate Area by Multiplying half of the two Bases summation by Height
    3- Write The Output A 
*/

function Area(b1, b2, h) {
  let a = 0.5 * (b1 + b2) * h;
  return a;
}

console.log(Area(6, 2, 3));
