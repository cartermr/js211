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
            window.alert('The deck has been delt, you are ready to play!')
        })
}

const playHand = () => {
    let battleField = [player1[0], player2[0]]

    let card1img = document.createElement('img')
    card1img.src = battleField[0].image
    let card2img = document.createElement('img')
    card2img.src = battleField[1].image

    document.getElementById('player1CardPlayed').appendChild(card1img)
    document.getElementById('player2CardPlayed').appendChild(card2img)
}

playerPics()
dealCards()