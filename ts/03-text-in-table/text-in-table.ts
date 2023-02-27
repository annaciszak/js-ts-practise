import { writeFileSync } from 'fs';
import { join } from 'path';

function printAndSaveToFile(array: Array<string>, filename: string) {
    if (array.length) {
        let wordMaxLength: number = getMaxWordLength(array)
        let temp: string = "*"

        array.unshift((temp.repeat(wordMaxLength)))
        array.push(('*'.repeat(wordMaxLength)))

        for (let i: number = 0; i < array.length; i++) {
            let line: string = '*' + array[i].padEnd(wordMaxLength, ' ') + '*'
            array[i] = line
            console.log(array[i])
        }

        let textContent: string = array.join("\n")
        writeToFileSync(textContent, filename)

    } else {
        throw new Error('Array is empty!')
    }
}

function getMaxWordLength(array: Array<string>): number {
    let lengths = array?.map(el => el.length)
    return Math.max(...lengths)
}

function writeToFileSync(contentToWrite: string, filename: string) {
    writeFileSync(join(__dirname, filename), contentToWrite, {
        flag: 'w',
    });
}

printAndSaveToFile(["Hello", "World", "in", "a", "frame"], 'file.txt')