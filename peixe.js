var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;
var tutu;

function preload() {
    // Carregar o fundo
    this.load.image('mar', 'assets/bg_azul-claro.png');

    // Carregar o logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    // Carregar o peixe
    this.load.image('peixe', 'assets/peixes/tartaruga.png');

    // Carregar o tubarão
    this.load.image('tutu', 'assets/tutu/tubarao.png');
}

function create() {
    // Adicionar o mar na tela
    this.add.image(400, 300, 'mar');

    // Adicionar o logo na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    // Guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe')

    // Transformando a variável
    peixinho.setFlip(true, false);

    // Guardar o tubarão em uma variável
    tubarao = this.add.image(400, 300, 'tutu')

    // Transformando a variável
    tubarao.setFlip(true, false);

}

function update() {

// Adicionando controles no peixe 
peixinho.x = this.input.x;
peixinho.y = this.input.y
 }

