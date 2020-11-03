console.log('loading robot.js')

let getRobot = function() {
    let randomNumber = Math.random()

    fetch("https://robohash.org/" + randomNumber)
    .then(response => response.blob())
    .then(blob => {
        let pic = URL.createObjectURL(blob)
        let img = document.createElement('img')
        img.src = pic
        document.getElementById('body').appendChild(img)
    })
}

getRobot()


/*
let fetchPromise = fetch("https://robohash.org/" + randomNumber)
    let responsePromise = fetchPromise.then(function(response) {
        console.log(response)
        return response.blob()
    })

    responsePromise.then(function(image) {
        let pic = URL.createObjectURL(image)
        console.log(pic)
        let img = document.createElement('img')
        img.src = pic
        document.getElementById('body').appendChild(img)
    })
    */