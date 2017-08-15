var Snake={};
Snake.Boot = function(game){};
Snake.Boot.prototype = {
	preload: function(){
		this.stage.backgroundColor = '#6e9665';
		this.load.image('loading-background', 'assets/img/loading-background.png');
		this.load.image('loading-progress', 'assets/img/loading-progress.png');
	},
	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.state.start('Preloader');
	}
};