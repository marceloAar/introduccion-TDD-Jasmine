//devuelve la suma del primer y último número en el array
function sumMaxMin(arr){

    max = Math.max(...arr);
    min = Math.min(...arr);
    
    return max+min;
      
  }
  
  var total = sumMaxMin([-2,-5,-10]);
  console.log(total);

describe("sumMaxMin", function() { 
    it("devuelve la suma del primer y ultimo valor en [1,3,10] numeros positivos", function() { 
        expect(sumMaxMin([1,3,10])).toEqual(11); 
    }); 
    it("devuelve la suma del primer y ultimo valor en [-2,-5,-10] numeros negativos", function() { 
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
    }); 
  
});