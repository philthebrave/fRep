function PrintArray ( array, final ) {

  // console.log(array.concat(final))
  const arr1 = array.concat(final)
  const arr2 = array.concat(final)
  // console.log("arr1: " + arr1)
  // console.log("arr2: " + arr2)
  
  if (arr1.length < 2) {
    // Handle cases where the array is not valid or too short for the operation
    return arr1;
  } else {

    for (let i = 1; i < arr1.length; i++) {
      arr2[i] = arr1[i] - arr1[i - 1];
    }
    const arr3 = arr2.slice(1)
    // console.log("Arr1: " + arr1 + "    Arr2: " + arr2 + "   Arr2 Sliced: " + arr2.slice(1) + "    repArray: " + array);
    return console.log(arr3);
  }

  // return console.log("Workout Summary: " + array.slice(1).concat(final));

}

export default PrintArray;