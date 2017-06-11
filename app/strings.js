exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
    reduceString: function(str, amount) {

        var output = "";

        var prev = -1;

        var repeatedChar = 0;
        for (var currentInd = 0; currentInd < str.length; currentInd++) {
            if (prev >= 0 && str.charAt(currentInd) === str.charAt(prev)) {
                repeatedChar++;
            } else {
                repeatedChar = 0;
                prev = currentInd;
            }

            if (repeatedChar < amount) {

                output = output + (str.charAt(currentInd));
            }
        }

        return output;

    },

    wordWrap: function(str, cols) {

        var wordWrap = '',
            splitWords = str.split(' ');

        wordWrap = splitWords[0];

        for (var i = 1; i < splitWords.length; i++) {
            if (wordWrap.length + splitWords[i].length < cols) {
                wordWrap += ' ' + splitWords[i];
            } else {
                wordWrap += '\n' + splitWords[i];
            }
        }

        return wordWrap;
    },

    reverseString: function(str) {

        var rev = '';

        for (var ind = str.length - 1; ind >= 0; ind--) {
            rev += str[ind];
        }
        return rev;

    }
};