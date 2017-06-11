exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  },

  manipulateRemoteData: function(url) {
  	var result = [];

  $.get(url, function(data){

  	var d=data.people;

  		for(ind i=0; i< d.length; ind++)
  		{
  			result.push(d[ind].name);
  		}
  	
            
        });
         
  		}
  return def;
}
};
