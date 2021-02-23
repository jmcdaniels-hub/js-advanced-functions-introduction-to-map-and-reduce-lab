
let mapToNegativize= 
    function(sourceArray){
   return sourceArray.map(x => x * -1);
}

 function mapToNoChange(sourceArray){
    return sourceArray.map(x=>x);
 }
    
 function mapToDouble(sourceArray){
     return sourceArray.map(x => x * 2);
 }

 function mapToSquare(sourceArray){
     return sourceArray.map(x => x * x);
 }




 function reduceToTotal(sourceArray, startingPoint){
     const reducer = (accumulator, startingPoint) => accumulator + startingPoint;
        return sourceArray.reduce(reducer);
 }


 function reduceToAllTrue(sourceArray){
     const reducer = (sourceArray) => sourceArray == 1 
     return sourceArray.reduce(reducer);
 }