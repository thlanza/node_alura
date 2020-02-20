module.exports = function(app) {
  app.post("/select", function(req, res) {
    console.log("consultando");

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.lista(function(erro, resultado) {
      console.log("consultando lista");
      res.json(resultado);
    });
  });
};
