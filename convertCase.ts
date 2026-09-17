function convertCase(str: string): string {
  return str
    .split("")
    .map(char => {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        return char.toUpperCase();
      }

      return char;
    })
    .join("");
}

console.log(convertCase("Hello World!"))