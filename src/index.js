module.exports = function toReadable(number) {
    let result = '';
    const isRound = number % 10 === 0;
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    const hundred = 'hundred';

    const str = number.toString();

    if (number < 20) {
        result = units[number];
    } else if (number < 100 && isRound) {
        result = tens[str[0]];
    } else if (number < 100) {
        result = `${tens[str[0]]} ${units[str[1]]}`;
    } else if (Number(str.slice(1)) === 0) {
        result = `${units[str[0]]} ${hundred}`;
    } else if (Number(str.slice(1)) < 20) {
        result = `${units[str[0]]} ${hundred} ${units[Number(str.slice(1))]}`;
    } else if (isRound) {
        result = `${units[str[0]]} ${hundred} ${tens[str[1]]}`;
    } else {
        result = `${units[str[0]]} ${hundred} ${tens[str[1]]} ${units[str[2]]}`;
    }

    return result;
}
