function calculadora () {}
calculadora.prototype.operacao = function (a, b, op) {
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