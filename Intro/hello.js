function hello() {
    console.log("Hello! Howdy!")
}

let hello2 = function() {
    console.log("Hello from Hello2")
}

let hello3 = () => {
    console.log("Hello from Hello3")
}

let getNumber = () => 5

hello()
hello2()
hello3()
console.log(getNumber())