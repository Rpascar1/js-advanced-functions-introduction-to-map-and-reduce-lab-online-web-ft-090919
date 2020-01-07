array = [1,2,3,-9]
function mapToNegativize(array){
    for(let i = 0; i< array.length; i++){
          array[i]=(array[i]* -1)
        }
    return array
}

mapToNegativize(array)

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    for(let i = 0; i< array.length; i++){
          array[i]=(array[i]* 2)
        }
    return array
}

function mapToSquare(array){
    for(let i = 0; i< array.length; i++){
          array[i]=(array[i]**2)
        }
    return array
}

function reduceToTotal(array,total=0){
      for(let i=0; i< array.length; i++){
            total += array[i]
          }
      return total
  }
//[1, 2, true, "razmatazz", false]
  function reduceToAllTrue(array){
        for(let i=0; i< array.length; i++){
            if (!array[i]) return false
          }
             return true
    }

    function reduceToAnyTrue(array){
          for(let i=0; i< array.length; i++){
              if (array.find(el => el === true)){
                return true
              } else {
               return false
             }
            }
      }
