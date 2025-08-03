const PrintArray = ({ array, final }) => {

  const arr1 = array.concat(final)
  const arr2 = array.concat(final)
  
  if (arr1.length < 2) {
    return "...";
  } else {

    for (let i = 1; i < arr1.length; i++) {
      arr2[i] = arr1[i] - arr1[i - 1];
    }
    const arr3 = arr2.slice(1).join(', ')
    return arr3;
  }

}

export default PrintArray;