const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, age){
      this.id = id
      this.name = name
      this.canThrowBall = 'yes'
      this.canDodgeBall = 'yes'
      this.hasPaid = 'yes'
      this.isHealthy = 'yes'
      this.yearsExperience = age - 5
    }
  }
  class BlueTeammate extends Player {
    constructor(){
      super()
      this.mascot = 'bull'
      this.teamColor = 'blue'
    }
  }
  class RedTeammate extends Player {
    constructor(){
      super()
      this.mascot = 'eagle'
      this.teamColor = 'red'
    }
  }
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person)} )
      li.id = 'person' + person.id
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (person) => {
    console.log(`person li ${person.id} was clicked!`)
    let newPlayer = new Player(person.id, person.name, person.age)
    listOfPlayers.push(newPlayer)
    console.log(listOfPlayers)

    let players = document.getElementById('players')
    let li = document.createElement('li')
    let redButton = document.createElement('button')
    redButton.addEventListener('click', function() {addTeam(newPlayer, 'red')} )
    let blueButton = document.createElement('button')
    blueButton.addEventListener('click', function() {addTeam(newPlayer, 'blue')} )

    li.id = 'player' + newPlayer.id
    redButton.innerText = 'Red'
    blueButton.innerText = 'Blue'

    li.appendChild(redButton)
    li.appendChild(blueButton)
    li.appendChild(document.createTextNode(newPlayer.name))
    players.appendChild(li)

    document.getElementById('person' + person.id).remove()
  }

  const addTeam = (player, color) => {
    console.log(`player li ${player.id} was clicked!`)
    let team
    let newTeammate

    if (color == 'red') {
      newTeammate = new RedTeammate(player)
      redTeam.push(newTeammate)
      team = document.getElementById('red')
    } else {
      newTeammate = new BlueTeammate(player)
      blueTeam.push(newTeammate)
      team = document.getElementById('blue')
    }

    console.log(newTeammate)

    let li = document.createElement('li')
    li.appendChild(document.createTextNode(JSON.stringify(newTeammate)))
    team.appendChild(li)
  }