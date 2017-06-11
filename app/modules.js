exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
    createModule: function(str1, str2) {
        var returnObj = {

            "greeting": str1,
            "name": str2,

            "sayIt": function() {
                return this.greeting + ", " + this.name;
            }

        };

        return returnObj;

    }
};