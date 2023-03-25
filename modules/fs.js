const fs = require("fs");
const path = require("path");

// Criar Pasta
fs.mkdir(path.join(__dirname, "test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pasta Criada");
});

// Criar Arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.html"),
  "hello node!!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo Criado");
    // Adiciona Arquivo
    fs.appendFile(
      path.join(__dirname, "test", "test.html"),
      " hello world!!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo Adicionado");
      }
    );
    // Ler Arquivo
    fs.readFile(
      path.join(__dirname, "test", "test.html"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
