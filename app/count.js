exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function(start, end) {

        var interval;
        countNumb();

        function countNumb() {

            if (start <= end) {
                console.log(start++);
                interval = setTimeout(countNumb, 100);
            }
        }

        return {
            cancel: function() {
                clearTimeout(interval);
            }
        };

    }
};