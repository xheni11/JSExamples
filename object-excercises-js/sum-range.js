function range(start, end, third) {
  if (third == undefined) {
    third = 1;
  }
  if (start <= end) {
    for (let i = start; i <= end; i = i + third) {
      console.log(i);
    }
  } else {
    for (let i = start; i >= end; i = i - third) {
      console.log(i);
    }
  }
}

function sum(arr) {
  s = 0;
  for (let nr = 0; nr < arr.length; nr++) {
    s = s + arr[nr];
  }
  return s;
}
