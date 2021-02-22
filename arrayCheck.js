let numbers = [7, 2, 5, 6, 8, 3, 3]
function arrayCheck(array, item) {
    let match = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] == item) {
            match += item
        }
    }
    if (match > 0) {
        return true;
    }
    else {
        return false;
    }
}

arrayCheck(numbers, 1)