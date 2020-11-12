/**
 *    CODE PLAN
 * 
 * - Create three classes, one to represent a player, one for each team available.
 * 
 * - A function to list the people who signed up, wanting to play dodgeball.
 * 
 * - A function that transfer a person to player status, create a new player object, add the person
 * into the player object, then add that new player to an array of players. Have a button in place to
 * trasnfer that new player to a team.
 * 
 * - A function that will transfer a player to either the red or blue teams
 * 
 * 
 *    TESTING
 * 
 * - I would test that a new player object was created, from one of the people in the arrOfPeople[]
 * - I would test that the new player was added to the listOfPlayers[]
 * - I would then test that a new team member was created for both the red and blue teams, then test
 * that the new team members was added to the appropriate color team array.
 */



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
    },]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, age){
      this.id = id
      this.name = name
      this.canThrowBall = true
      this.canDodgeBall = true
      this.hasPaid = true
      this.isHealthy = true
      this.yearsExperience = age - 5
    }
  }

  class Teammate extends Player {
    constructor(id, name, experience, teamColor){
      super(id, name)
      super.yearsExperience = experience
      this.teamColor = teamColor
    }
  }
  
  const listPeopleChoices = () => {
    // grab the ul list area for available people
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      // create a new li to list the new person
      const li = document.createElement("li")
      // create a button to make the new person a player
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      // make button clickable
      button.addEventListener('click', function() {makePlayer(person)} )
      // give the listed element an id so it can be removed later if needed
      li.id = 'person' + person.id
      // add the new person to the list area
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  
  const makePlayer = (person) => {
    console.log(`${person.name} was turned into a player`)

    // create a new player object, from the person selected, add to list of players array
    let newPlayer = new Player(person.id, person.name, person.age)
    listOfPlayers.push(newPlayer)

    console.log(listOfPlayers)

    // grab the ul section titled players
    let players = document.getElementById('players')
    // create a new li to list the new player
    let li = document.createElement('li')
    // create a set of buttons to add player to the red or blue team
    let redButton = document.createElement('button')
    redButton.addEventListener('click', function() {addTeam(newPlayer, 'red')} )
    redButton.innerText = 'Red'
    let blueButton = document.createElement('button')
    blueButton.addEventListener('click', function() {addTeam(newPlayer, 'blue')} )
    blueButton.innerText = 'Blue'

    // set an id for the newly listed player
    li.id = 'player' + newPlayer.id

    // attach the buttons and name of player to the players list in html
    li.appendChild(redButton)
    li.appendChild(blueButton)
    li.appendChild(document.createTextNode(newPlayer.name))
    players.appendChild(li)

    // remove the person selected to be made a player from the list of available people
    document.getElementById('person' + person.id).remove()
  }

  const addTeam = (player, color) => {
    console.log(`${player.name} was added to the ${color} team`)

    // create needed variables
    let team
    let newTeammate

    // determine if the red or blue team button was selected
    if (color == 'red') {
      // create a new team mate object, based on color selected and player
      newTeammate = new Teammate(player.id, player.name, player.yearsExperience, color)
      // add the new team mate to the list of players on a team
      redTeam.push(newTeammate)
      // grabe the ul list area for the selected color team
      team = document.getElementById('red')
    } else {
      newTeammate = new Teammate(player.id, player.name, player.yearsExperience, color)
      blueTeam.push(newTeammate)
      team = document.getElementById('blue')
    }

    console.log(redTeam)
    console.log(blueTeam)

    // create new li to list the new team mate
    let li = document.createElement('li')
    // add the new team mate to the appropriate team color
    li.appendChild(document.createTextNode(newTeammate.name))
    team.appendChild(li)

    // remove the selected player from the available players list
    document.getElementById('player' + player.id).remove()
  }