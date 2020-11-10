let player1
let player2

const playerPics = () => {
    for (let i = 1; i < 3; i++) {
        let randomNumber = Math.random()

        fetch("https://robohash.org/" + randomNumber)
            .then(res => res.blob())
            .then(blob => {
                let pic = URL.createObjectURL(blob)
                let img = document.createElement('img')
                img.src = pic
                let str = 'player' + i + 'Image'
                document.getElementById(str).append(img)
            })
    }
}

const dealCards = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
        .then(res => res.json())
        .then(data => deck = data.cards)
        .then(deck => {
            player1 = deck.slice(0, 26)
            player2 = deck.slice(26, deck.length)
            // window.alert('The deck has been delt, you are ready to play!')
        })
}

const playHand = () => {
    console.log('player 1 stack =', player1.length)
    console.log('player 2 stack =', player2.length)
    let battlefield = [player1.shift(), player2.shift()]

    console.log('battlefied =', battlefield)

    displayBattlefield(battlefield)
    
    if (battlefield[0].value == battlefield[1].value) {
        window.alert("WAR!!")
        war(battlefield)
    } else {
        battle(battlefield)
    }

    console.log('player 1 stack =', player1.length)
    console.log('player 2 stack =', player2.length)

    if (player1.length == 52) {
        window.alert('Player 1 Won the Game!!')
    } else if (player2.length == 52) {
        window.alert('Player 2 Won the Game!!')
    }
}

const war = (battlefield, ext1, ext2) => {
    let extra1 = []
    extra1.push(battlefield.shift())
    let extra2 = []
    extra2.push(battlefield.shift())

    battlefield = [player1.shift(), player2.shift()]

    displayBattlefield(battlefield)

    for (let i = 0; i < 2; i++) {
        extra1.push(player1.shift())
        extra2.push(player2.shift())
    }

    if (ext1 && ext2) {
        extra1.concat(ext1)
        extra2.concat(ext2)
    }

    console.log(extra1)
    console.log(extra2)

    if (battlefield[0].value == battlefield[1].value) {
        window.alert("WAR AGAIN!!")
        war(battlefield, extra1, extra2)
    }

    if (Number(battlefield[0].value) && Number(battlefield[1].value)) {
        if (battlefield[0].value > battlefield[1].value) {
            document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
            player1.push(battlefield[0], battlefield[1])
            for (let i = 0; i < extra1.length; i++) {
                player1.push(extra1[1])
                player1.push(extra2[1])
            }
        } else {
            document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
            player2.push(battlefield[0], battlefield[1])
            for (let i = 0; i < extra1.length; i++) {
                player2.push(extra1[1])
                player2.push(extra2[1])
            }
        }
    }

    if (!Number(battlefield[0].value) && Number(battlefield[1].value)) {
        document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
        player1.push(battlefield[0], battlefield[1])
        for (let i = 0; i < extra1.length; i++) {
            player1.push(extra1[1])
            player1.push(extra2[1])
        }
    } else if (Number(battlefield[0].value) && !Number(battlefield[1].value)) {
        document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
        player2.push(battlefield[0], battlefield[1])
        for (let i = 0; i < extra1.length; i++) {
            player2.push(extra1[1])
            player2.push(extra2[1])
        }
    }

    if (!Number(battlefield[0].value) && !Number(battlefield[1].value)) {
        let value1 = 0
        let value2 = 0
        let faceCards = {
            1: 'JACK',
            2: 'QUEEN',
            3: 'KING',
            4: 'ACE'
        }

        for (let i = 1; i < 5; i++) {
            if (battlefield[0].value == faceCards[i]) {
                value1 = i
            }
            if (battlefield[1].value == faceCards[i]) {
                value2 = i
            }
        }

        if (value1 > value2) {
            document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
            player1.push(battlefield[0], battlefield[1])
            for (let i = 0; i < extra1.length; i++) {
                player1.push(extra1[1])
                player1.push(extra2[1])
            }
        } else {
            document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
            player2.push(battlefield[0], battlefield[1])
            for (let i = 0; i < extra1.length; i++) {
                player2.push(extra1[1])
                player2.push(extra2[1])
            }
        }
    }
}

const battle = (battlefield) => {
    if (Number(battlefield[0].value) && Number(battlefield[1].value)) {
        if (battlefield[0].value > battlefield[1].value) {
            document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
            player1.push(battlefield[0])
            player1.push(battlefield[1])
        } else {
            document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
            player2.push(battlefield[0])
            player2.push(battlefield[1])
        }
    }

    if (!Number(battlefield[0].value) && Number(battlefield[1].value)) {
        document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
        player1.push(battlefield[0])
        player1.push(battlefield[1])
    } else if (Number(battlefield[0].value) && !Number(battlefield[1].value)) {
        document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
        player2.push(battlefield[0])
        player2.push(battlefield[1])
    }

    if (!Number(battlefield[0].value) && !Number(battlefield[1].value)) {
        let value1 = 0
        let value2 = 0
        let faceCards = {
            1: 'JACK',
            2: 'QUEEN',
            3: 'KING',
            4: 'ACE'
        }

        for (let i = 1; i < 5; i++) {
            if (battlefield[0].value == faceCards[i]) {
                value1 = i
            }
            if (battlefield[1].value == faceCards[i]) {
                value2 = i
            }
        }

        if (value1 > value2) {
            document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
            player1.push(battlefield[0])
            player1.push(battlefield[1])
        } else {
            document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
            player2.push(battlefield[0])
            player2.push(battlefield[1])
        }
    }
}

const displayBattlefield = (battlefield) => {
    let player1Card = document.getElementById('player1Card')
    let player2Card = document.getElementById('player2Card')

    if (player1Card.hasChildNodes() && player2Card.hasChildNodes()) {
        player1Card.removeChild(player1Card.firstChild)
        player2Card.removeChild(player2Card.firstChild)
    }

    let img1 = document.createElement('img')
    img1.src = battlefield[0].image
    img1.className = 'cardImg'
    player1Card.append(img1)

    let img2 = document.createElement('img')
    img2.src = battlefield[1].image
    img2.className = 'cardImg'
    player2Card.append(img2)
}

playerPics()
dealCards()