let friend1 = {
    name: "john",
    phone: '234-567-8790',
    address: '1234 main street',
    email: 'john@gmail.com'
}

let values = Object.values(friend1)

console.log(friend1.name)
console.log(friend1['name'])
console.log(values)

let friends = [
    {
        'name': 'john',
        'email': 'john@gmail.com'
    },
    {
        'name': "jenny",
        'email': 'jenny@gmail.com'
    },
    {
        'name': 'jack',
        'email': 'jack@gmail.com'
    }
]

console.log(friends[0]["first name"])

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}

let apple = {
    'name': 'apple',
    'color': 'red',
    'shape': 'round',
    'texture': 'smooth',
    'taste': 'sweet'
}

for (const key in apple) {
    console.log(key, "  ->  ", apple[key])
}