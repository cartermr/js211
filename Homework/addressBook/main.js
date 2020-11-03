const getUser = () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(data => {
            let users = data.results
            console.log(users)
            users.forEach(user => document.getElementById('addressBookList').insertAdjacentHTML('beforeend', generateContactCard(user)))
        })
}

const generateContactCard = (user) => {
    return `
    <section class="contactCard">
        <img src="${user.picture.large}" alt="IMAGE">
        <article class="contactInfo">
            <span><span class="bold">Name:</span> ${user.name.first} ${user.name.last}</span>
            <span><span class="bold">Phone Number:</span> ${user.phone}</span>
            <span><span class="bold">Email:</span> ${user.email}</span>
        </article>
    </section>`   
}

getUser()