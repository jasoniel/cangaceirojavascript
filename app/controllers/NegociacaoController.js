class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adiciona(event) {
    event.preventDefault();

    // let data = new Date(this._inputData.value.split("-"));
    // let data = new Date(this._inputData.value.replace(/-/g, ","));

    let data = new Date(
      ...this._inputData.value
        .split("-")
        .map((item, indice) => item - (indice % 2)) // mês como é o indice 1 .. terá resto 1..
    );

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao);
  }
}
