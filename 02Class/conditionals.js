let color = "purple";  // red, blue, purple
let type = "suv";  // sedan, sports, truck, suv

if (type && color == "white") {
    console.log("I will not buy a white", type)
}
else if (type == "sedan" && (color != "black" && color != "blue")) {
    console.log("I will not buy a", color, "sedan")
}
else if (type == "suv" && color != "purple") {
    console.log("I will not buy a", color, "suv")
} 
else if (type && color == "red") {
    console.log("I will buy a red", type)
}
else if (type == "sports" && color) {
    console.log("I will Buy a", color, "sports car")
}
else if (type == "sedan" && color == "blue") {
    console.log("I will buy a blue sedan")
}
else if (type == "suv" && color == "purple") {
    console.log("I will buy a purple suv")
} else {
    console.log("Maybe I will buy a", color, type)
}