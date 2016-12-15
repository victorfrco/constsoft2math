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

math.prototype.intToBin = function (number) {
	return (number >>> 0).toString(2);	
};
