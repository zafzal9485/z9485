//We must make a program to count the vowels in a word//
function vowelCount(word) {
    var i = 0;
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        if (char === "a" || char === "A" ||
            char === "e" || char === "E" ||
            char === "i" || char === "I" ||
            char === "o" || char === "O" ||
            char === "u" || char === "U") {
            i++;
        }
    }
    console.log(i);
    return i;
}
vowelCount("pakistan zindabad");
