function iterativeLog(array){
  //don't need array below, only element, index
  array.forEach((element,index,array) => {console.log(`${index}: ${element}`)})
}

function iterate(callback){
  var newArray = [3,6,8];
  newArray.forEach(callback);
  return newArray;
}

function doToArray(array,callback){
  array.forEach(callback);
}
