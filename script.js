const fs = require('fs');

fs.writeFile('toto.txt', 'Hello Toto!', function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('toto.txt has been created')
});

fs.readdir('.', function(err, files) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});

/*
fs.writeFile('toto.txt', 'Hello Toto!', function(err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
});
fs.readdir('.', function(err, files) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});
*/