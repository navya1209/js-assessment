exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
    listFiles: function(data, dirName) {

        var files = [];

        var dirs = [];

        function listAll(data, dirName) {
            dirs.push(data.dir);

            for (var i = 0; i < data.files.length; i++) {
                var file = data.files[i];

                //Check if it is file
                if (typeof file === 'string') {
                    //console.log(file);

                    if (!dirName || (dirs.indexOf(dirName)) > -1) {

                        files.push(file);

                    }
                } else {
                    //console.log(file);
                    //call recursively
                    listAll(file, dirName);

                }

            }
            dirs.pop();

        }

        listAll(data, dirName);
        return files;

    },

    permute: function(arr) {

        var results = [];

        //Using BackTracking Algorithm.

        function perm(arr, start, end) {

            //If start and end are equal, there is only one char
            if (start === end) {
                results.push(arr.slice());
            } else {
                for (var i = start; i <= end; i++) {

                    //Swap first char with element at position i
                    arr = swap(arr, start, i);

                    //Call recursively for next element till end
                    perm(arr, start + 1, end);

                    //back track to swap to oiginal
                    arr = swap(arr, start, i);

                }
            }


        }

        //Method to swap give array with 2 indexes

        function swap(arr2, x, y) {
            var temp = arr2[x];

            arr2[x] = arr2[y];

            arr2[y] = temp;

            return arr2;
        }


        perm(arr, 0, arr.length - 1);
        return results;


    },

    fibonacci: function(n) {

        function fib(num) {
            if (num <= 1) {
                return num;
            }

            return fib(num - 1) + fib(num - 2);
        }

        //Without recursion
        //var f=[];
        //  f[0] = 0, f[1] = 1;
        // for (var i = 2; i <= n; i++)
        //  {
        //       f[i] = f[i-1] + f[i-2];
        //  }

        return fib(n);

    },

    validParentheses: function(n) {

        function isValid(str) {
            var arr = [];
            //First thing, n should be multiple of 2 as number of open === number of closed parantheses.
            //Step-2, if the char is "(", push it to array and if the char is ")", pop froma rray if the array is not empty,
            //Its not valid paranthesis otherwise
            if ((str.length % 2) != 0) {
                var ind = n.indexOf(str);
                n.splice(ind, 1);
            } else {

                for (var i = 0; i < str.length; i++) {

                    var p = str[i];

                    if (p == "(") {

                        arr.push(p);
                    } else if (p == ")") {


                        var len = arr.length;
                        if (len > 0) {

                            arr.pop();

                        } else {

                            var ind = n.indexOf(str);
                            n.splice(ind, 1);
                        }
                    }
                }
            }


        }

        for (var i = 0; i < n.length; i++) {

            isValid(n[i]);
        }


        return n;

    }
};