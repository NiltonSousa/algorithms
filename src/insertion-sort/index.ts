function main(numbers: Array<number>) {
  console.log("Initial numbers array ->", numbers);

  console.log("Sorting...");

  for (let j = 1; j < numbers.length; j++) {
    const key = numbers[j];

    let i = j - 1;

    while (i >= 0 && numbers[i] > key) {
      numbers[i + 1] = numbers[i];
      i = i - 1;
    }

    numbers[i + 1] = key;
  }

  console.log("Numbers sorted o/ ->", numbers);
}

main([5, 2, 4, 6, 1, 3]);
