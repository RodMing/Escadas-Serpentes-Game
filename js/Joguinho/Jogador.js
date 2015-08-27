var Jogador = function(nome) {
    this.nome = nome;
    this.local = 0;
}

Jogador.prototype.mover = function(localDestino) {
    if (localDestino >= 0 && localDestino <= 100) {
        this.local = localDestino;
    } else {
        this.local = localDestino < 0 ? 0 : 100;
    }
}