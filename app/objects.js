exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
    alterContext: function(fn, obj) {

        return fn.call(obj);
    },

    alterObjects: function(constructor, greeting) {
        constructor.prototype.greeting = greeting;

    },

    iterate: function(obj) {

        //Get the keys using Object.keys(obj). Iterate and manipulate
        var result = []

        var keys = Object.keys(obj);

        for (var ind = 0; ind < keys.length; ind++) {
            result.push(keys[ind] + ': ' + obj[keys[ind]]);
        }

        return result;

    }
};