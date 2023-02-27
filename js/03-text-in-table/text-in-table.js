// <!-- Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. 
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

// Also save the framed words to a text file. -->

let fs = require('fs');

function printAndSaveToFile(array, filename) {
    let filename = filename
    if (array.length) {
        let wordMaxLength = getMaxWordLength(array)

        array.unshift(('*'.repeat(wordMaxLength)))
        array.push(('*'.repeat(wordMaxLength)))

        for (let i = 0; i < array.length; i++) {
            array[i] = '*' + array[i].padEnd(wordMaxLength, ' ') + '*'
            console.log(array[i])
        }

        let textContent = array.join("\n")
        writeToFile(filename, textContent)

    } else {
        throw new Error('Array is empty!');
    }
}

function getMaxWordLength(stringArray) {
    let lengths = stringArray.map(el => el.length)
    return Math.max(...lengths)
}

function writeToFile(filename, textContent) {
    fs.writeFile(filename, textContent, function (err) {
        if (err) throw err;
    });
}

printAndSaveToFile(["Hello", "World", "in", "a", "frame"], "file.txt")