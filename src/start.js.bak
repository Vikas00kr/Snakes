var game = new Phaser.Game(320, 480, Phaser.AUTO);
var states = {
		'Boot': Snake.Boot,
		'Preloader': Snake.Preloader,
		'MainMenu': Snake.MainMenu,
		'Game': Snake.Game
};
for(var state in states){
	game.state.add(state, states[state]);
    }
	game.state.start('Boot');