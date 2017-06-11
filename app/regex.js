exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    //Match any digit
        if(str.match(/\d/))
        {
          return true;
        }

        return false;
  },

  containsRepeatingLetter: function(str) {
    //1 or more occurances with case insensitive
        if(str.match(/([a-z])\1+/i))
        {
          return true;
        }
        return false;
  },

  endsWithVowel: function(str) {


//Any vowel letter at beginning/end
        if(str.match(/[aeiou]\b/gi))
        {
          return true;
        }
        return false;
  },

  captureThreeNumbers: function(str) {

    //Find the first math for any digit with 3 ocurances
    var firstMatch = (/\d{3}/).exec(str); 

    if(firstMatch)
        {
          return firstMatch[0];
        }

        return false;

  },

  matchesPattern: function(str) {

    

     if(str.match(/^(\d{3})-(\d{3})-(\d{4})$/))
        {
          return true;
        }
        return false;

  },

  isUSD: function(str) {

    //First should be $ sign and then 1 or more occurances of digit followed by ,
    //0 or more occurances of ,3 digit numbers and
    //atost 2 occurances of .[0-9]

    if(str.match(/^\$\d+(,\d{3})*(\.[0-9]{2})?$/))
        {
          return true;
        }
        return false;

  }
};
