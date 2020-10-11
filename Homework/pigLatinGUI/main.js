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
    let noPunc = /\w/.test(word[word.length - 1]);
    let str1 = '';
    let str2 = '';
    let str3 = '';

    if (index == -1) {
        if (noPunc == true) {
            newWord = word + 'ay';
        } else {
            str1 = word.slice(0, -1);
            str2 = word.slice(-1);
            newWord = str1 + 'ay' + str2;
        };
    } else {
        if (noPunc == true) {
            str1 = word.slice(0, index);
            str2 = word.slice(index,);
            newWord = str2 + str1 + 'ay';
        } else {
            str1 = word.slice(0, index);
            str2 = word.slice(index,-1);
            str3 = word.slice(-1);
            newWord = str2 + str1 + 'ay' + str3;
        }
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
    let newWord = '';
    let noPunc = /\w/.test(word[word.length - 1]);
    if (noPunc == true) {
        newWord = word + 'yay';
    } else {
        let str1 = word.slice(0, -1);
        let str2 = word.slice(-1);
        newWord = str1 + 'yay' + str2;
    };
    return newWord;
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

const reset = () => {
    document.getElementById('originalText').value = '';
    document.getElementById('translatedText').innerText = 'Translated Text'
}

