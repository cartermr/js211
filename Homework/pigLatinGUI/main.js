const vowels = ['a', 'e', 'i', 'o', 'u'];

const firstVowel = (word) => {
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            return i;
        };
    };
    return -1;
};

const translateConsonantWord = (word) => {
    let index = firstVowel(word);
    let newWord = '';

    if (index == -1) {
        newWord = word + 'ay';
    } else {
        let str1 = word.slice(0, index);
        let str2 = word.slice(index,);
        newWord = str2 + str1 + 'ay';
    };
    return newWord;
};

const checkStartVowel = (word) => {
    if (vowels.includes(word[0])) {
        return true;
    } else {
        return false;
    };
};

const translateVowelWord = (word) => {
    return word + 'yay';
};

const processTextTranslation = (text) => {
    if (!text.includes(' ')) {
        return text;
    } else {
        let txtArray = text.split(' ');
        return txtArray;
    };
};

const translateText = () => {
    let text = document.getElementById('originalText').value;
    let output = document.getElementById('translatedText');
    let toTranslate;
    let translated = '';
    let translatedArray = [];

    toTranslate = processTextTranslation(text);

    if (Array.isArray(toTranslate)){
        for (let i = 0; i < toTranslate.length; i++) {
            if (checkStartVowel(toTranslate[i])) {
                translatedArray[i] = translateVowelWord(toTranslate[i]);
            } else {
                translatedArray[i] = translateConsonantWord(toTranslate[i]);
            };
        };
        output.innerText = translatedArray.join(' ');
    } else {
        if (checkStartVowel(toTranslate)) {
            translated = translateVowelWord(toTranslate);
        } else {
            translated = translateConsonantWord(toTranslate);
        };
        output.innerText = translated;
    };
};

let translateButton = document.getElementById('translate');

translateButton.addEventListener('click', translateText);
