for (i = 1; i < 101; i++) {
    console.log("for loop number:", i)
}

console.log("\n*************************************\n")

for (i = 100; i > 0; i--) {
    console.log("for loop number:", i)
}

console.log("\n*************************************\n")

for (i = 2; i <= 100; i = i + 2) {
    console.log("for loop number:", i)
}

console.log("\n*************************************\n")

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizz buzz")
    }
    else if (i % 5 == 0) {
        console.log("buzz")
    }
    else if (i % 3 == 0) {
        console.log("fizz ")
    } else {
        console.log(i)
    }
}