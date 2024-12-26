const array = [15, 16, 17, 18, 19 ,20];

function reducer(accmulator, CurrentValue, index) {
    const returns = accmulator + CurrentValue;
    console.log(
        'accmulator: ${accmulator}, CurrentValue: ${CurrentValue}, index: ${index}, returns:${returns}',
    );
    return returns;
}

array.reduce(reducer);