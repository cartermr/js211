let player1
let player2

const playerPics = () => {
    for (let i = 1; i < 3; i++) {
        let randomNumber = Math.random()

        // Grab a random robot pic for each player from the api, display the pic
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

// grab a deck of cards from the api
const dealCards = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
        .then(res => res.json())
        .then(data => deck = data.cards)
        .then(deck => {
            player1 = deck.slice(0, 26)
            player2 = deck.slice(26, deck.length)
        })
}

// Play a hand of the game
const playHand = () => {
    // Set the cards to compare
    let field = [player1.shift(), player2.shift()]

    // display the cards to the html
    displayBattlefield(field)
    // battle the two cards
    battle(field)

    //whoever has 52 cards wins the game
    if (player1.length == 52) {
        window.alert('Player 1 Won the Game!!')
    } else if (player2.length == 52) {
        window.alert('Player 2 Won the Game!!')
    }
}

// function to compare the two drawn cards together
const battle = (battleField) => {

    // get the value of each card to compare
    let left = battleField[0].value
    let right = battleField[1].value

    // if the cards are the same, run a round of war
    if (left == right) {
        war(battleField)
        return
    }

    // If both cards are numbers, compare values, award cards to the winner
    if (!isNaN(left) && !isNaN(right)) {
        if (Number(left) > Number(right)) {
            document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
            player1 = player1.concat(battleField)
        } else {
            document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
            player2 = player2.concat(battleField)
        }
    }

    // If one card is a face card and one a number, award cards to the player with face card
    if (isNaN(left) && !isNaN(right)) {
        document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
        player1 = player1.concat(battleField)
    } else if (!isNaN(left) && isNaN(right)) {
        document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
        player2 = player2.concat(battleField)
    }

    // If both cards are face cards
    if (isNaN(left) && isNaN(right)) {
        let value1 = 0
        let value2 = 0
        // map a value to each face card
        let faceCards = {
            1: 'JACK',
            2: 'QUEEN',
            3: 'KING',
            4: 'ACE'
        }

        // determine the number value for each face card drawn to battle
        for (let i = 1; i < 5; i++) {
            if (battleField[0].value == faceCards[i]) {
                value1 = i
            }
            if (battleField[1].value == faceCards[i]) {
                value2 = i
            }
        }

        // compare the values and award cards to the winner
        if (value1 > value2) {
            document.getElementById('winner').innerText = 'Player 1 Won this Hand!'
            player1 = player1.concat(battleField)
        } else {
            document.getElementById('winner').innerText = 'Player 2 Won this Hand!'
            player2 = player2.concat(battleField)
        }
    }
}

const war = (warField) => {
    window.alert("WAR!!!")

    // loop to add the extra cards to the take pile for winner
    for (let i = 0; i < 2; i++) {
        warField.push(player1.shift(), player2.shift())
    }
    // add two new cards to compare in battle
    warField.unshift(player1.shift(), player2.shift())

    // display the new cards to compare
    displayBattlefield(warField)
    // send the new cards off to battle, awarding the extra cards to the winner
    battle(warField)
}

const displayBattlefield = (displayfield) => {
    let player1Card = document.getElementById('player1Card')
    let player2Card = document.getElementById('player2Card')

    if (player1Card.hasChildNodes() && player2Card.hasChildNodes()) {
        player1Card.removeChild(player1Card.firstChild)
        player2Card.removeChild(player2Card.firstChild)
        document.getElementById('winner').innerText = ''
    }

    let img1 = document.createElement('img')
    img1.src = displayfield[0].image
    img1.className = 'cardImg'
    player1Card.append(img1)

    let img2 = document.createElement('img')
    img2.src = displayfield[1].image
    img2.className = 'cardImg'
    player2Card.append(img2)
}

playerPics()
dealCards()