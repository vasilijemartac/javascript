function findMissingLetter(array)
{
    let letterArr = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    let letterSlice = letterArr.slice(letterArr.indexOf(array[0]), letterArr.indexOf(array[array.length - 1]) + 1);

    let missingLetter = letterSlice.find((e, i) => e !== array[i]);

    return missingLetter;
}

console.log(findMissingLetter(["a","b","c","d","f"]))


