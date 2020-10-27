let friends = ["john", "mark", "matt", "amy", "james"]

for (i = 0; i < friends.length; i++) {
    console.log(friends[i])
}

console.log("\n*************************************\n")

let foundAmy = false
let z = 0
while(!foundAmy) {
    let thisFriend = friends[z]
    if (thisFriend === 'amy') {
        foundAmy = true
    }
    console.log(thisFriend)
    z++
}