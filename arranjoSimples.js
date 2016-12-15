function math() {}
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

var math = new math();

document.write(math.arranjoSimples(7, 4));
