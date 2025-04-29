const { Transform } = require('node:stream');
const fs = require('node:fs');

const readFile = fs.createReadStream('pg75369.txt', { encoding: 'utf8', highWaterMark: 16384 });
const writeFile = fs.createWriteStream('new-file.txt');

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        // Розбиваємо текст на слова
        const newData = chunk.toString().split(' ');
        const reversedWords = [];

        for (let i = 0; i < newData.length; i++) {
            const word = newData[i];
            let reversedWord = '';
            
            // Перевертаємо кожне слово
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }

            // Додаємо перевернуте слово в масив
            reversedWords.push(reversedWord);
        }

        // Повертаємо результат як єдиний рядок з пробілами між словами
        callback(null, reversedWords.join(' '));
    }
});

readFile.pipe(myTransform).pipe(writeFile);
