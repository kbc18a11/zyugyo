const judgmentPrimeNumber = (num) => {
    if (num === 2 || num === 3 || num === 5 || num === 7) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    if (num % 3 === 0) {
        return false;
    }

    if (num % 5 === 0) {
        return false;
    }

    if (num % 7 === 0) {
        return false;
    }

    return true;

};

module.exports = judgmentPrimeNumber;
