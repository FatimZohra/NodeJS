
var fs = require("fs"),
    path = require("path");
 //afficher les fichiers du dossier parent 
var p = "./"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});

 //creer un dossier si non existant
 var dir = './monDossier';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
