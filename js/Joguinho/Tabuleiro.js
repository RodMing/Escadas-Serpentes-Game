var Tabuleiro = function(nivel) {
    if (nivel < 4 || nivel > 100) throw 'O nivel deve ser entre 4 e 100';
    if (nivel%4 != 0) throw 'O nivel deve ser multiplo de 4';
    this.elementos = new Elementos;
    this.elementos.gerar(nivel);
    this.jogadores = [];
}

Tabuleiro.prototype.addJogador = function(jogador) {
    this.jogadores.push(jogador);
}

Tabuleiro.prototype.start = function() {
    if(this.jogadores.length == 0) throw 'Nao existem jogadores';
    while (!this.getGanhador()) {
        var jogadorVez = this.getJogadorVez(jogadorVez);
        this.hasElemento(jogadorVez);
        jogadorVez.mover(jogadorVez.local+this.jogarDados(2,6));
        console.log(jogadorVez.nome + ' => ' + jogadorVez.local);
    }
}

Tabuleiro.prototype.hasElemento = function(jogador) {
    var origem = this.elementos.origens.indexOf(jogador.local);
    if (origem >= 0) jogador.mover(this.elementos.destinos[origem]);
}

Tabuleiro.prototype.jogarDados = function(quantidadeDados, quantidadeLados) {
    return Math.floor(Math.random() * (quantidadeDados*quantidadeLados)) + 1;
}

Tabuleiro.prototype.getJogadorVez = function(jogadorAtual) {
    if (jogadorAtual === null) {
        return this.jogadores[0];
    }
    var idJogadorAtual = this.jogadores.indexOf(jogadorAtual);

    return idJogadorAtual == this.jogadores.length-1 ? this.getJogadorVez() : this.jogadores[++idJogadorAtual];
}

Tabuleiro.prototype.getGanhador = function() {
    for (i=0; i<this.jogadores.length; i++) {
        if (this.jogadores[i].local >= 100) return this.jogadores[i].nome;
    }
    return false;
}