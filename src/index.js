module.exports = function toReadable (number) {
    const singleDigitNumsInString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const twoDigitNumsExceptions = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twoDigitNums = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const numberLength = String(number).length;

    if (number % 100 >= 10 && number % 100 <= 19){//exceptions
        if (numberLength === 3) {
            return `${singleDigitNumsInString[+('' + number)[0]]} hundred ${twoDigitNumsExceptions[number % 100 - 10]}`;
        } else {
            return `${twoDigitNumsExceptions[number % 100 - 10]}`;
        }
    } else if (numberLength === 1){//normal numbers
        return `${singleDigitNumsInString[number]}`;
    } else if (numberLength === 2){
        return `${twoDigitNums[+('' + number)[0] - 2]}${((+('' + number)[1]) !== 0) ? ' ' + singleDigitNumsInString[+('' + number)[1]] : ''}`;
    } else if (numberLength === 3){
        return `${singleDigitNumsInString[+('' + number)[0]]} hundred${((+('' + number)[1]) !== 0) ? ' ' + twoDigitNums[+('' + number)[1] - 2] : ''}${((+('' + number)[2]) !== 0) ? ' ' +  singleDigitNumsInString[+('' + number)[2]]: ''}`;
    }
}
