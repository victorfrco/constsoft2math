const intToBin = require('./IntegerToBinary.js');

function math() {}

math.prototype.operacao = function (a, b, op) {
	if(op == "+"){
  	return a+b;
  }
  else if(op == "-"){
  	return a-b;
  }
  else if(op == "*"){
  	return a*b;
  }
  else if(op == "/"){
  	if(b == 0)
    	return null;
    else{
    	return a/b;
    }
  }
  else{
  	return null;
  }
};

math.prototype.arranjoSimples = function(n1, n2) {
	var fatn1 = 1;
	var fatn2 = 1;
  var aux = n1 - n2;
    
     for(i = 1; i < n1; i++)
         fatn1 += fatn1 * i;
      
      for(i = 1; i < aux; i++)
         fatn2 += fatn2 * i;
      
    
    
    var fatt = fatn1/fatn2;
    
    return fatt;
};
math.prototype.intToBin = intToBin;
