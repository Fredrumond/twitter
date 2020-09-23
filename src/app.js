const express = require('express');

const app = express();

app.get("/", (req, res) => { 
    return res.status(200).json({msg: "Sou uma rota inicial"});
});


app.listen(proess.env.PORT || 3333, function () {
    console.log('Aplicaçao rodando.');
  });