var updateDelay=0;
var start=true;
var sLen=[1,1,1]
var moveL=false;
var moveR=false;
var moveU=false;
var moveD=false;
var speed=8   ;
var step=16    ;
var playerx=[]  ;
var food;
var endX,endY;
var score=0

Snake.Game=function(game) {
var cursors;
var player;
var police;

var players; 
   

};
Snake.Game.prototype={

create: function() {
game.physics.startSystem(Phaser.Physics.ARCADE);
    
textStyle_Key = { font: "bold 20px sans-serif", fill: "#46c0f9", align: "center" };
textStyle_Value = { font: "bold 22px sans-serif", fill: "#fff", align: "center" };     
    
    
var grass=this.add.sprite((this.world.width)*0.5,(this.world.height)*0.5,"background");
grass.anchor.setTo(0.5);
    
scoreText=game.add.text(game.world.centerX-10, game.world.centerY-210, "Score:", textStyle_Key);
scoreText.anchor.setTo(0.5);
scoreTextValue = game.add.text(game.world.centerX+40, game.world.centerY-210, score.toString(), textStyle_Value);
scoreTextValue.anchor.setTo(0.5);    

players = game.add.group();
players.enableBody = true;
//players.physicsBodyType = Phaser.Physics.ARCADE;
players = game.add.physicsGroup(Phaser.Physics.ARCADE);    
//playerx  = players.create((this.world.width)*0.5+(step),(this.world.height)*0.5,"player");
players.setAll('body.collideWorldBounds', true);
players.setAll('body.bounce.x', 1);
players.setAll('body.bounce.y', 1);

for(itr=sLen.length-1;itr>=0;itr--){
    console.log(itr)
    playerx[itr]  = players.create((this.world.width)*0.5-(itr*step),(this.world.height)*0.5,"player");
}    
    
    
/*player=this.add.sprite((this.world.width)*0.5,(this.world.height)*0.5,"player");
//player.anchor.setTo(0,0);
game.physics.arcade.enable(player);
player.body.collideWorldBounds = true;
*/
    
this.createFood();


cursors = game.input.keyboard.createCursorKeys();


},
createFood: function(){
var randomX = Math.floor(Math.random() * 20 ) * step,
            randomY = Math.floor(Math.random() * 30 ) * step;
    
food=this.add.sprite((randomX),(randomX),"food");
//food.anchor.setTo(0.5);
game.physics.arcade.enable(food);
},
    
eatFood: function(){
score=score+1;
scoreTextValue.text = score;    
    
food.kill();
sLen.push(1);
playerx[sLen.length-1]  = players.create((endX),(endY),"player");    
this.createFood();
//playerx.unshift(1);

},
    
gameOver: function(){
var gameOver=game.add.text(game.world.centerX, game.world.centerY, "Game Over", textStyle_Key);
gameOver.anchor.setTo(0.5);
var reStart=game.add.text(game.world.centerX, game.world.centerY+30, "Press 'CTRL+R' to restart", { font: "bold 18px sans-serif", fill: "#fff", align: "center" } );
reStart.anchor.setTo(0.5);
game.paused=true;
},

update: function() {
    game.physics.arcade.overlap(players,food,this.eatFood,null,this);  
    game.physics.arcade.overlap(players,players,this.gameOver,null,this);  
//game.physics.arcade.overlap(players,food,this.eatFood,null,this);    
updateDelay++;
//console.log("work::" + updateDelay % (10));    

//game.physics.arcade.collide(players,players);
     
/*		if (cursors.left.isDown)
        {
            player.x -= 25;
        }
        else if (cursors.right.isDown)
        {
            player.x += 25;
        }
        else if (cursors.up.isDown)
        {
            player.y -= 25;
        }
        else if (cursors.down.isDown)
        {
            player.y += 25;
        }
    */

/*Using players group

    if(start  && (updateDelay % (speed) == 0)){
    players.x+=step;
    }
	else if(moveU  && (updateDelay % (speed) == 0)){
	players.y -=step;
	}
	else if(moveD  && (updateDelay % (speed) == 0)){
	players.y +=step;
	}
	else if(moveL  && (updateDelay % (speed) == 0)){
	players.x -=step;
	}
	else if(moveR  && (updateDelay % (speed) == 0)){
	players.x +=step;
	}
    
*/
    
	if(start  && (updateDelay % (speed) == 0)){
        var currX=undefined,currY=undefined;
        for(itr=0;itr<sLen.length;itr++)
        {   
            var preX=currX,preY=currY;
            currX=playerx[itr].x, currY=playerx[itr].y;
         
            if(itr==0){
            playerx[itr].x +=step;    
            }
            else{
	        playerx[itr].x =preX;
            playerx[itr].y =preY;
            }
        }
        endX=currX;
        endY=currY;
    }
	else if(moveU  && (updateDelay % (speed) == 0)){
        var currX=undefined,currY=undefined;
        for(itr=0;itr<sLen.length;itr++)
        {   
            var preX=currX,preY=currY;
            currX=playerx[itr].x, currY=playerx[itr].y;
         
            if(itr==0){
            playerx[itr].y -=step;    
            }
            else{
	        playerx[itr].x =preX;
            playerx[itr].y =preY;
            }
        }
        endX=currX;
        endY=currY;        
	}
	else if(moveD  && (updateDelay % (speed) == 0)){
        var currX=undefined,currY=undefined;
        for(itr=0;itr<sLen.length;itr++)
        {   
            var preX=currX,preY=currY;
            currX=playerx[itr].x, currY=playerx[itr].y;
        
            if(itr==0){
            playerx[itr].y +=step;    
            }
            else{
	        playerx[itr].x =preX;
            playerx[itr].y =preY;
            }
        }
        endX=currX;
        endY=currY;        
	}
	else if(moveL  && (updateDelay % (speed) == 0)){
        var currX=undefined,currY=undefined;
        for(itr=0;itr<sLen.length;itr++)
        {   
            var preX=currX,preY=currY;
            currX=playerx[itr].x, currY=playerx[itr].y;
         
            if(itr==0){
            playerx[itr].x -=step;    
            }
            else{
	        playerx[itr].x =preX;
            playerx[itr].y =preY;
            }
        }
        endX=currX;
        endY=currY;        
        
	}
	else if(moveR  && (updateDelay % (speed) == 0)){
        var currX=undefined,currY=undefined;
        for(itr=0;itr<sLen.length;itr++)
        {   
            var preX=currX,preY=currY;
            currX=playerx[itr].x, currY=playerx[itr].y;
         
            if(itr==0){
            playerx[itr].x +=step;    
            }
            else{
	        playerx[itr].x =preX;
            playerx[itr].y =preY;
            }
        }
        endX=currX;
        endY=currY;        
        
	}     

    if (playerx[0].x >= game.world.width)
    {
        playerx[0].x-= game.world.width;
    }

    else if (playerx[0].x < 0)
    {
        playerx[0].x+= game.world.width;
    }

    else if (playerx[0].y >= game.world.height)
    {
        playerx[0].y-= game.world.height;
    }

    if (playerx[0].y < 0)
    {
        playerx[0].y+= game.world.height;
    }    
    

    if (cursors.up.isDown && !moveD)
    {   //player.y -= 2;
		start=false;
		moveU=true;
		moveD=false;
		moveL=false;
		moveR=false;
    }
    else if (cursors.down.isDown && !moveU)
    {	//player.y += 2;
		start=false;
		moveD=true;
		moveU=false;
		moveL=false;
		moveR=false;
    }
    else if (cursors.left.isDown && !moveR)
    {	//player.x -= 2;
		start=false;
		moveL=true;
		moveD=false;
		moveU=false;
		moveR=false;
    }
    else if (cursors.right.isDown && !moveL)
    {	//player.x += 2;
		start=false;
		moveR=true;
		moveD=false;
		moveL=false;
		moveU=false;
    }     
 

},
render: function() {

   //game.debug.body(food,'#0fffff');
   game.debug.body(players,'#0fffff');

}     

};