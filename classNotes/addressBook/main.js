const getUser = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => {
            let users = data.results
            users.forEach(user => document.getElementById('contactCards').insertAdjacentHTML('beforeend', generateContactCard(user)))
        })
}

getUser()

const generateContactCard = (user) => {
    return `
    <div class='contactCard'>
    <img src="${user.picture.thumbnail}" alt="">
        <span class='name'>${user.name.first} ${user.name.last}</span>
        <span class="phone">${user.phone}</span>
        <br>
        <span class="email">${user.email}</span>
    </div>`
}