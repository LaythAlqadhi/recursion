function mergeSort(array) {
  if (array.length <= 1) return array;
  
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);
  
  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);
  
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex])
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex])
      rightIndex++;
    }
  }
  return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}
