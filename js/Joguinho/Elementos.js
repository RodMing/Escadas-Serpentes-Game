var Elementos = function() {
    this.origens = [];
    this.destinos = [];
}

Elementos.prototype.gerar = function(nivel) {
    var quantidade = Math.round(nivel/2)/2;
    console.info('Serpentes:');
    this.gerarSerpentes(quantidade);
    console.info('Escadas:');
    this.gerarEscadas(quantidade);
}

Elementos.prototype.gerarSerpentes = function(quantidade) {
    if (quantidade == 0) return;
    
    var origem = this.getLocal();
    var destino = this.getLocal();
    while (!this.isSerpente(origem, destino) || !this.isValido(origem, destino)) {
        origem = this.getLocal();
        destino = this.getLocal();
    }
    
    this.add(origem, destino);
    console.log(origem);
    return this.gerarSerpentes(--quantidade);
}

Elementos.prototype.isSerpente = function(origem, destino) {
    return destino < origem;
}

Elementos.prototype.gerarEscadas = function(quantidade) {
    if (quantidade == 0) return;
    
    var origem = this.getLocal();
    var destino = this.getLocal();
    while (!this.isEscada(origem, destino) || !this.isValido(origem, destino)) {
        origem = this.getLocal();
        destino = this.getLocal();
    }
    
    this.add(origem, destino);
    console.log(origem);
    return this.gerarEscadas(--quantidade);
}

Elementos.prototype.isEscada = function(origem, destino) {
    return destino > origem;
}

Elementos.prototype.isValido = function(origem, destino) {
    var origemValid = this.origens.indexOf(origem) >= 0 || this.destinos.indexOf(origem) >= 0 ? false : true;
    var destinoValid = this.origens.indexOf(destino) >= 0 || this.destinos.indexOf(destino) >= 0 ? false : true;
    return (origem != destino) && (origemValid && destinoValid);
}

Elementos.prototype.getLocal = function() {
    return Math.floor(Math.random() * 100) + 1;
}

Elementos.prototype.add = function(origem, destino) {
    this.origens.push(origem);
    this.destinos.push(destino);
}