function insertionSort(x = []) {
  let key,
    j = 0
  for (let i = 1; i < x.length; i++) {
    key = x[i]
    for (j = i - 1; j >= 0; j--) {
      if (x[j] > key) {
        x[j + 1] = x[j]
      } else {
        break
      }
    }
    x[j + 1] = key
  }
  return x
}

console.log(insertionSort([5, 9, 1, 4]))
