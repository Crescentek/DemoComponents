const chunk = (arr, size) =>
// Split array into chunks

  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export default chunk;
