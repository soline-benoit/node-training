const fs = require('fs');

function generateData() {
    let data = '1';
    for (i = 0; i < 400000; i++) {
        data = data + Math.random() * 10;
    }

    return data;
}

function callback() {
    console.log('Process \'bigFile\' terminé, durée ' + (Date.now() - date) + ' ms');
}

fs.writeFile('bigFile', generateData(), () => callback());
const date = Date.now();
console.log('Disponible');