var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']



function addElementToBeginningOfArray(array, element){
  array = array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  return array.unshift(element)
}