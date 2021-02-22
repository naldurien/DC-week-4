let people = ["John", "Mary", "Alex", "Steve", "Mary", "John"]

function removeDupes(array) {
    deDuped = new Set();
    for (let index = 0; index < array.length; index++) {
        deDuped.add(array[index]);
    }
    deDupedList = Array.from(deDuped)
    console.log(deDupedList)
}

removeDupes(people)