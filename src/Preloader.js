Snake.Preloader = function(game) {};
Snake.Preloader.prototype = {
	preload: function() {
		var preloadBG = this.add.sprite((this.world.width-580)*0.5, (this.world.height+150)*0.5, 'loading-background');
		var preloadProgress = this.add.sprite((this.world.width-540)*0.5, (this.world.height+170)*0.5, 'loading-progress');
		this.load.setPreloadSprite(preloadProgress);
		
		this._preloadResources();
	},
	_preloadResources() {
		var pack = Snake.Preloader.resources;
		for(var method in pack) {
			pack[method].forEach(function(args) {
				var loader = this.load[method];
				loader && loader.apply(this.load, args);
			}, this);
		}
	},
	create: function() {
		this.state.start('MainMenu');
	}
};
Snake.Preloader.resources = {
	'image': [
		['background', 'assets/back.png'],
		['title', 'assets/img/title.png'],
		['road', 'assets/road.png'],
		['food', 'assets/police.png'],
		['player', 'assets/player.png'],
		['leftBump', 'assets/leftBump.png'],
		['rightBump', 'assets/rightBump.png']
	],
	'spritesheet': [
		['button-start', 'assets/img/button-start.png', 180, 180],
		['button-continue', 'assets/img/button-continue.png', 180, 180],
		['button-mainmenu', 'assets/img/button-mainmenu.png', 180, 180],
		['button-restart', 'assets/img/button-tryagain.png', 180, 180],
		['button-achievements', 'assets/img/button-achievements.png', 110, 110],
		['button-pause', 'assets/img/button-pause.png', 80, 80],
		['button-audio', 'assets/img/button-sound.png', 80, 80],
		['button-back', 'assets/img/button-back.png', 70, 70]
	]
};
