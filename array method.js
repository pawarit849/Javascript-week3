const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accmulator,CurrentValue) => {
    return accmulator + CurrentValue;
});

console.log(sum);