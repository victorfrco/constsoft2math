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

math.prototype.primo = function(num){
	var primo = 1;
	if(num === 0){
    	console.log('Entre com um número diferente de 0');
		return false;
	}
	while(num !== 0){
		for(var i=2 ; i<num ; i++) {
			if(num % i === 0) { 
				primo = 0;
		     	console.log('Não é primo');
		     	return false;
		    }
		} 
	    if(num == 2) {
	    	primo = 0;
	    	console.log('O número não é primo');
	    	return false;
	    }
	    if(primo === 1 || num === 1)
			console.log('É primo!');
			return true;
	}
};

math.prototype.permutacao = function(texto){
	var arrayTexto = texto.split(";")

	console.log(arrayTexto.length);

	var calcPerm = new math();
	return calcPerm.fatorial(arrayTexto.length);
};
