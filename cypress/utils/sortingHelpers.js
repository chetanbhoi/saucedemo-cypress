// Checks if an array is sorted in ascending order
export const isSortedAsc = (array) => {
    return array.every((value, index, array) => index === 0 || array[index - 1] <= value);
};

// Checks if an array is sorted in descending order
export const isSortedDesc = (array) => {
    return array.every((value, index, array) => index === 0 || array[index - 1] >= value);
};

// Sorts an array of numbers in ascending order
export const sortNumberInAscending = (array) => {
    return [...array].sort((a, b) => a - b);
};

// Sorts an array of numbers in descending order
export const sortNumberInDescending = (array) => {
    return [...array].sort((a, b) => b - a);
};
