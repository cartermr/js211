/**
 * 4. Write a JavaScript program to find the area of a triangle where
 * lengths of the three of its sides are 5, 6, 7.
 */

const areaTriangle = (a, b, c) => {
    let s = (a + b + c) / 2
    let insideSqrt = s * (s - a) * (s - b) * (s - c)
    let area = Math.sqrt(insideSqrt)
    return area
}

let computedArea = areaTriangle(5, 6, 7)

console.log("The area of a triangle with side 5, 6, 7 is:")
console.log(computedArea)