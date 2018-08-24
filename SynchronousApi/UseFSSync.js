var fs = require('fs');

// Demo for synchronous calls

if(fs.existsSync('temp')){
    console.log('Temp already existing .. Removing');
    if(fs.existsSync('temp/New.txt')){
        fs.unlinkSync('temp/New.txt'); // deletes the file !
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');

if(fs.existsSync('temp')){
    console.log("Temp created !");
    process.chdir('temp');
    fs.writeFileSync('Test.txt',"This is created on the fly");
    fs.renameSync('Test.txt','New.txt');
    console.log('File size :'+ fs.statSync('New.txt').size + "Bytes ");
    console.log("File contents " + fs.readFileSync('New.txt').toString() );
}

console.log("program Ended");


