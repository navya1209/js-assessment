exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
    valueAtBit: function(num, bit) {

        //Using inbuilt funcions
        num = num.toString(2);

        //Without using inbuilt functions
        //     var rem;
        //  var binary=[];

        //     while(num > 1) {

        //        rem = num%2;
        //        num=Math.floor(num/2);
        //        binary.push(rem);
        //  }

        // if(num===1)
        //      {
        //        binary.push(1);
        //      }
        //   num=binary.join("");


        return parseInt(num[(num.length) - bit]);

    },

    base10: function(str) {

        return parseInt(str, 2);

    },

    convertToBinary: function(num) {

        var decialValue = num.toString(2);

        return ('00000000' + decialValue).substring(decialValue.length);

    },

    multiply: function(a, b) {
        var mulValue = a * b;

        return parseFloat(mulValue.toPrecision(1));

    }
};