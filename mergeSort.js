const data = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13];

const mergeSort = (data) => {
  if (data.length <= 1) return data;
  const mid = Math.floor(data.length / 2);
  const firstHalf = mergeSort(data.slice(0, mid));
  const secondHalf = mergeSort(data.slice(mid));

  return merge(firstHalf, secondHalf);
};

const merge = (left, right) => {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return result.concat(left, right);
};

console.log(mergeSort(data));
