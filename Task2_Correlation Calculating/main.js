// calculating Correlation

// input -> N, x[], y[]
// processes -> correlation equation
// Output -> Correlation value

// Algorithm 

/*
    1- Initialize variables N , x[], y[], sumX , sumY , sumX2 , sumY2, sumXY , Co
    2- Read N value
    3- For Each iteration Read x[i], y[i]
    4- Calculate x2, y2 , xy  and add the new values to all sums 
    5- Calculate the numerator val
    6- Calculate the denominator val
    7- Calculate Co val
    8- Print Co val
*/
function calcCorrelation() {
    let Co = N = sumX = sumY = sumX2 = sumY2 = sumXY = a = b  = 0
    let x= [];
    let y= [];
    N = Number( prompt("N = "))
    for (let i = 0; i < N; i++) {
        x[i] = Number( prompt("X["+(i+1)+"] = "))
        y[i] = Number( prompt("Y["+(i+1)+"] = "))
        sumX += x[i]
        sumY += y[i]
        sumX2 += Math.pow(x[i],2)
        sumY2 += Math.pow(y[i],2)
        sumXY += x[i]*y[i]
    }
    a= N * sumXY - (sumX * sumY)
    b= Math.sqrt(N * sumX2 - Math.pow(sumX,2)) * Math.sqrt(N * sumY2-Math.pow(sumY,2))
    Co = a/b 
    return Co; 
}
console.log(calcCorrelation())  // (4,1) (2,8) (6,8) (6,9) => 0.23544 