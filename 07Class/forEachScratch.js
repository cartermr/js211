let friends = ['mark', 'mary', 'matt', 'maddie', 'jack', 'james']

function scratchForEach(collection, func){
    for (let i = 0; i < collection.length; i++){
        let element = collection[i]
        func(element, i)
    }
}

function scratchFilter(collection, func){
    let results = []
    for (let i = 0; i < collection.length; i++){
        let element = collection[i]
        let filterdIn = func(element, i)
        if(filterdIn == true){
            results.push(element)
        }
    }
    return results
}

scratchForEach(friends, function(element, index){
    console.log(element)
})

let justJs = scratchFilter(friends, function(element, index){
    if (element == 'J'){
        return true
    } else {
        return false
    }
})