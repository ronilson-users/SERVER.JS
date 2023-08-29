const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const produtos = {
  "items": [
    {
      "CodBarras": "7896292006454",
      "Descricao": "gelatina morango",
      "Quantidade": 2,
      "Fornecedor": "Coca-Cola",
      "Fabricante": "Fensa",
      "Preco": "15.90"
    },
    // ... Outros produtos aqui ...
  ]
};

// Rota para buscar detalhes do produto com base no código de barras
app.get('/produtos/:codigoDeBarras', (req, res) => {
  const codigoDeBarras = req.params.codigoDeBarras;

  // Buscar o produto com base no código de barras
  const produtoEncontrado = produtos.items.find(item => item.CodBarras === codigoDeBarras);

  if (produtoEncontrado) {
    res.status(200).json(produtoEncontrado);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

// Suas outras rotas e configurações aqui...

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

