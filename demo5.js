const sum = (...num) => {
    const s = num.reduce((total, i) => total + i, 0);
    return s;
}

const add = (...num) => {
    let s = 0;
    for (const i of num) {
        s = s + i;
    }
    return s;
}

export { sum, add };