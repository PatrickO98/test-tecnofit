const proxy = [
    {
        "/class": {
          "target": "http://testes.tecnofit.com.br",
          "secure": false,
          "logLevel": "debug",
          "changeOrigin": true,
          "pathRewrite": {"^/class" : "http://testes.tecnofit.com.br/class"}
        }
      }
  ];
  module.exports = proxy;