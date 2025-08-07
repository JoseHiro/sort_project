const data = [5, 11, 9, 7, 13, 6, 15, -10,  4, 2, 8];

const quickSort = (data) => {
  if(data.length <= 1) return data;
  const pivot = data[0];
  const left = data.slice(1).filter(x => x <= pivot);
  const right = data.slice(1).filter(x => x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(data));
