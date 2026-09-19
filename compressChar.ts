function compressCharacters(str: string): string {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let count = 1;

    while (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    result += str[i];
    if (count > 1) {
      result += count;
    }
  }

  return result;
}