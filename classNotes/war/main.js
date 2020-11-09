let deck
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
    let player1Card = document.getElementById('player1Card')
    let player2Card = document.getElementById('player2Card')

    if (player1Card.hasChildNodes() && player2Card.hasChildNodes()) {
        player1Card.removeChild(player1Card.firstChild)
        player2Card.removeChild(player2Card.firstChild)
        document.getElementById('winner').innerText = ''
    }
    
    let battleField = [player1.shift(), player2.shift()]

    console.log(battleField)

    let card1img = document.createElement('img')
    card1img.className = 'cardImg'
    card1img.src = battleField[0].image
    let card2img = document.createElement('img')
    card2img.className = 'cardImg'
    card2img.src = battleField[1].image
    player1Card.appendChild(card1img)
    player2Card.appendChild(card2img)

    if (battleField[0].value == battleField[1].value) {
        document.getElementById('winner').innerText = "Draw!"
    } else if (Number(battleField[0].value) && Number(battleField[1].value)) {
        if (Number(battleField[0].value) > Number(battleField[1].value)) {
            document.getElementById('winner').innerText = "Player 1 won this hand!"
            player1.push(battleField[1])
        } else {
            document.getElementById('winner').innerText = "Player 2 won this hand!"
            player2.push(battleField[0])
        }
    } else if (!Number(battleField[0].value) && Number(battleField[1].value)) {
        document.getElementById('winner').innerText = "Player 1 won this hand!"
        player1.push(battleField[1])
    } else if (Number(battleField[0].value) && !Number(battleField[1].value)) {
        document.getElementById('winner').innerText = "Player 2 won this hand!"
        player2.push(battleField[0])
    }

    if (player1.length == 50) {
        window.alert("Player 1 Won!!")
    } else if (player2.length == 50) {
        window.alert("Player 2 Won!!")
    }
}

playerPics()
dealCards()