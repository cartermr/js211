let n = 0
while (n < 20) {
    console.log("while loop number:", n)
    n = n + 1
}

console.log("\n*************************************\n")

let i = 1
while (i <= 100) {
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

    i++
}

console.log("\n*************************************\n")

let z = 1
do {
    if (z % 3 == 0 && z % 5 == 0) {
        console.log("fizz buzz")
    }
    else if (z % 5 == 0) {
        console.log("buzz")
    }
    else if (z % 3 == 0) {
        console.log("fizz ")
    } else {
        console.log(z)
    }

    z++
} while (z <= 100)

console.log("\n*************************************\n")

let l = 0
while(l < 10) {
    console.log("while loop", l)
    l++
}

let a = 0
do {
    console.log("do loop", a)
    a++
} while(a < 10)

console.log("\n*************************************\n")

let x = 10
while(x < 10) {
    console.log("while loop", x)
    x++
}

let y = 10
do {
    console.log("do loop", y)
    y++
} while(y < 10)