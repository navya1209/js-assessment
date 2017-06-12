exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {

    return function(str2)
    {
        return str + ', '+ str2;       
    }
  },

  makeClosures: function(arr, fn) {

    var closures=[];

    var myClosure = function(arg)
    {
      return function()
      {
        return fn(arg);
      };
    };

    for(var ind=0;ind<arr.length; ind++)
{
  closures.push(myClosure(arr[ind]));
}

return closures;

  },

  partial: function(fn, str1, str2) {

//Using clousres
    return function(str)
    {
      return fn(str1, str2, str);
    };

  },

  useArguments: function() {


//Using the built in argument objects

  var total=0;
  for(var ind = 0; ind < arguments.length; ind++)
  {
    total = total + arguments[ind];

  }
  return total;

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {



  }
};
