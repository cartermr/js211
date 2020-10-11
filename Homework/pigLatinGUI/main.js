// The set of vowel letters
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Function to find the first vowel letter in a word
const firstVowel = (word) => {
    // Loop through each letter in the word
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        // Compare the current letter to the vowel letters
        if (vowels.includes(letter)) {
            // If vowel found return its index
            return i;
        };
    };
    return -1;
};

// Function translates PigLatin for words starting with a consonant letter
const translateConsonantWord = (word) => {
    // Find the first vowel letter if any
    let index = firstVowel(word);
    let newWord = '';
    // Determine if the last charater of the word is punctuation
    let noPunc = /\w/.test(word[word.length - 1]);
    let str1 = '';
    let str2 = '';
    let str3 = '';

    // If no vowel letters
    if (index == -1) {
        if (noPunc == true) {
            // Translate is no punctuation at end
            newWord = word + 'ay';
        } else {
            // Slice out the word
            str1 = word.slice(0, -1);
            // Slice out the punctuation
            str2 = word.slice(-1);
            // Translate the word and punction back to end
            newWord = str1 + 'ay' + str2;
        };
    // This section is similar to above, just slicing word around the first vowel letter
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

// Check if the word starts with a vowel letter
const checkStartVowel = (word) => {
    if (vowels.includes(word[0])) {
        return true;
    } else {
        return false;
    };
};

// Translate word if it starts with a vowel
const translateVowelWord = (word) => {
    let newWord = '';
    // Determine if word ends with punctuation
    let noPunc = /\w/.test(word[word.length - 1]);
    if (noPunc == true) {
        // Translate word if no punctuation
        newWord = word + 'yay';
    } else {
        // Slice out the word
        let str1 = word.slice(0, -1);
        // Slice out the punctuation
        let str2 = word.slice(-1);
        // Translate word and add punctuation back to the end
        newWord = str1 + 'yay' + str2;
    };
    return newWord;
};

// Function to brake lines of text into an array, or return single word if that was all that was entered
const processTextTranslation = (text) => {
    // If the string has no spaces, return just the string
    if (!text.includes(' ')) {
        return text;
    } else {
        // If the string has spaces, split to an array at the spaces
        let txtArray = text.split(' ');
        return txtArray;
    };
};

// Main funtionc, controls program flow
const translateText = () => {
    // Get the text entered by user
    let text = document.getElementById('originalText').value;
    // Get the element the translated text will be displayed at
    let output = document.getElementById('translatedText');
    let toTranslate;
    let translated = '';
    let translatedArray = [];

    // Process the test as single string or array of strings
    toTranslate = processTextTranslation(text);

    // If an array of strings is retuned
    if (Array.isArray(toTranslate)){
        // Loop through each word in the array, send out for translation
        for (let i = 0; i < toTranslate.length; i++) {
            if (checkStartVowel(toTranslate[i])) {
                translatedArray[i] = translateVowelWord(toTranslate[i]);
            } else {
                translatedArray[i] = translateConsonantWord(toTranslate[i]);
            };
        };
        // Join array back to a full string with spaces between the words, display onto html page
        output.innerText = translatedArray.join(' ');
    } else {
        // If not an array then send out to translation as a single string
        if (checkStartVowel(toTranslate)) {
            translated = translateVowelWord(toTranslate);
        } else {
            translated = translateConsonantWord(toTranslate);
        };
        // Display translated string to html page
        output.innerText = translated;
    };
};

// Get the translate button from the html page
let translateButton = document.getElementById('translate');

// Add click event to translate button and run the text entered by the user through translation
translateButton.addEventListener('click', translateText);

// Function called by clear button on html page to clear the input and display areas of the html page
const reset = () => {
    document.getElementById('originalText').value = '';
    document.getElementById('translatedText').innerText = 'Translated Text'
}

