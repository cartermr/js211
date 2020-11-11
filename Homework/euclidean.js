const gcd = (a, b) => {
    if (a == 0) {
        return b
    }

    if (b == 0) {
        return a
    }

    let r = a % b

    return gcd(b, r)
}

let answer = gcd(270, 192)

console.log(answer)