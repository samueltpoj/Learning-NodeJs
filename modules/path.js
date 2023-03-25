const path = require("path");

// Nome Do Arquivo
console.log(path.basename(__filename));

// Nome do Diretorio
console.log(path.dirname(__filename));

// Nome da Extensao do Arquivo
console.log(path.extname(__filename));

// Objeto Path
console.log(path.parse(__filename));

// Junta Diretorio
console.log(path.join(__dirname, "test"));
