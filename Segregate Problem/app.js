function segregate(array = [], start, end) {
  //base case
  if (end <= start) return
  let mid = Math.floor((start + end) / 2)
  segregate(array, start, mid)
  segregate(array, mid + 1, end)
  merge(array, start, mid)
}

function merge(array = [], start, mid) {
  let i, j, k
  let left = array.slice(start,mid+1)
  let right = array.slice(mid+1)

  i = 0
  j = 0
  k = start
  while(i<left.length && left[i] <= 0){
    array[k]=left[i]
    i++
    k++
  }
  while(j<right.length && right[j]<=0){
    array[k]=right[j]
    j++
    k++
  }
  while(i<left.length){
    array[k++] = left[i++]
  }
  while(j<right.length){
    array[k++] = right[j++]
  }
}

let array = [6, -5, 12, 10, -9, -1]

console.log(array)

segregate(array, 0, array.length - 1)

console.log(array)
