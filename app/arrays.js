exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {

        return arr.indexOf(item);

    },

    sum: function(arr) {

        sum = 0;
        for (var ind = 0; ind < arr.length; ind++) {
            sum = sum + arr[ind];
        }
        return sum;
    },

    remove: function(arr, item) {

        for (var ind = arr.length; ind >= 0; ind--) {
            if (arr[ind] === item) {
                arr.splice(ind, 1);
            }
        }
        return arr;

    },

    removeWithoutCopy: function(arr, item) {

        for (var ind = arr.length; ind >= 0; ind--) {
            if (arr[ind] === item) {
                arr.splice(ind, 1);
            }
        }
        return arr;
    },

    append: function(arr, item) {

        arr.push(item);
        return arr;
    },

    truncate: function(arr) {

        arr.pop();
        return arr;
    },

    prepend: function(arr, item) {

        arr.splice(0, 0, item);
        return arr;
    },

    curtail: function(arr) {

        arr.splice(0, 1);
        return arr;
    },

    concat: function(arr1, arr2) {

        return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {

        arr.splice(index, 0, item);
        return arr;
    },

    count: function(arr, item) {
        count = 0;
        for (var ind = arr.length; ind >= 0; ind--) {
            if (arr[ind] === item) {
                count++;
            }
        }
        return count;

    },

    duplicates: function(arr) {

        var dup = [];
        //sort the given array
        arr = arr.sort();

        for (var ind = 1; ind < arr.length; ind++) {
            //Compare item with previous item starting from index 1
            if (arr[ind] == arr[ind - 1]) {
                //Check if the duplicate already exists in new array.
                if (dup.indexOf(arr[ind]) == -1) {
                    dup.push(arr[ind]);
                }
            }
        }
        return dup;

    },

    square: function(arr) {

        var result = [];

        for (var ind = 0; ind < arr.length; ind++) {
            result.push(Math.pow(arr[ind], 2));
        }

        return result;
    },

    findAllOccurrences: function(arr, target) {

        var result = [];

        for (var ind = 0; ind < arr.length; ind++) {
            if (arr[ind] == target) {
                result.push(ind);
            }
        }

        return result;

    }
};