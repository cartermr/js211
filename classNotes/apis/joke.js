const getJoke = () => {
    fetch("https://api.jokes.one/jod")
        .then(response => response.json())
        .then(data => data.contents.jokes)
        .then(jokes => {
            console.log("Joke of the Day")
            console.log(jokes[0].joke.title)
            console.log(jokes[0].joke.text)
        })
}

getJoke()