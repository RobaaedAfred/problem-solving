function findSecondLargestUnique(numbers: number[]): number | null {
    let largest: number | null = null;
    let secondlargest: number | null = null;

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];

        if (num !== largest) {
            if (largest === null || num > largest) {
                secondlargest = largest;
                largest = num;
            } else if (num !== secondlargest && (secondlargest === null || num > secondlargest)) {

                secondlargest = num;
            }
        }
    }

    return secondlargest;
}