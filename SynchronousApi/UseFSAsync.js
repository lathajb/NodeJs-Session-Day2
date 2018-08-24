// Async Demo

var fs = require('fs');

if(fs.existsSync('temp')){
    console.log('Temp already existing .. Removing');
    if(fs.existsSync('temp/New.txt')){
        fs.unlinkSync('temp/New.txt'); // deletes the file !
    }
    fs.rmdirSync('temp');
}

fs.mkdir('temp', (err) => {
    if (err) {
            console.log("Error : " + err);
    } else {
        fs.exists('temp', (exists) => {
            if (exists) {
                process.chdir('temp');
                fs.writeFile('Test.txt', 'This is using the Async API !', (err) => {
                    if (err) {
                        console.log("Error :" + err);
                    } else {
                        fs.rename('Test.txt', 'New.txt', (err) => {
                            if (err) {
                                console.log("Error :" + err);
                            } else {
                                fs.stat('New.txt', (err, data) => {
                                    console.log('File Size :' + data.size + " : bytes");
                                })

                                fs.readFile('New.txt', (err, dataFromFile) => {
                                    console.log('File Contents :' + dataFromFile.toString());
                                });
                            }
                        });
                    }
                });
            }else{

            }
        });
    }
});

console.log("Program ended");
