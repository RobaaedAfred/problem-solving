function convertToCamelCase(sentence: string): string {
    const words = sentence.trim().toLowerCase().split(" ");

    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return result;
}