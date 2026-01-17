function getUniqueSortedNumbers(arr) {
    const uniqueSet = new Set(arr);
    const uniqueArray = Array.from(uniqueSet);
    uniqueArray.sort(function(a, b) {
        return a - b;
    });
    return uniqueArray;
}