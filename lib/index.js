
var TextAbbrev = require('text-abbrev');

var compare = function(input,answer) {
    
    var test    = input.match(/(\S+)/g);
    var answers = answer.match(/(\S+)/g);
    
    for (var i=0;i<answers.length;i++) {
        
        var valid = [ ];
        var first = answers[i].match(/([\+\<\>\^\$\.\-\d\w\/]+)\(?/)[1];
        
        
        valid.push(first);
        if (answers[i].match(/\(\S+\)/)) {
            
            var extra = answers[i].match(/\((\S+)\)/)[1];
            var abbrev = new TextAbbrev([ extra ]).dump();

            for (var key in abbrev) {
                valid.push(first + key);
            }
        }
        var match = false;
        for (var x=0;x<valid.length;x++) {
          
            if (test[i] === valid[x]) {
                match = true;
            }
            
        }
        if (! match ) {
            return false;
            break;
        }
        
    }
    return true;
    
}
module.exports = compare;
