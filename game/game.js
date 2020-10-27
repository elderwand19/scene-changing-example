var pikachu;
var GameScene1 = new Phaser.Class({
  Extends:Phaser.Scene,

  initialize:
  function GameScene1() {
    Phaser.Scene.call(this,{key: 'GameScene1'});
  },
  preload: function() {
    this.load.image('pikachu','pikachu.png');
  },

  create:function () 
  {    
    cursors= this.input.keyboard.createCursorKeys();  

    this.pikachu = this.add.image(400, 350, 'pikachu').setScale(0.2);
    var txt= this.add.text(300,19,'Scene1 button');
    txt.setInteractive().on('pointerdown', function () {
      this.scene.scene.start('GameScene2');      
    })    
  },
  update:function () {    
    if (cursors.right.isDown)
    {
      if (this.pikachu.x !=1000)
      {
          this.pikachu.x += 2.0;
      } 
    } 
    else if (cursors.left.isDown)
    {         
      if (pikachu.x !=0)
      {
        pikachu.x -= 2.0;             
      }          
    }
      if(this.pikachu.x== 700){          
        this.scene.start('GameScene2');            
      }
  }  
});

var GameScene2 = new Phaser.Class({
  Extends: Phaser.Scene,
  
  initialize:

  function GameScene2() 
  {
    Phaser.Scene.call(this,{ key: 'GameScene2'});    
  },

  preload: function () {   
    
  },

  create: function () {
    cursors = this.input.keyboard.createCursorKeys();

    var txt = this.add.text(300, 19, 'Exit');
    txt.setInteractive().on('pointerdown', function () {
      this.scene.scene.start('GameScene1');
    })
  },

  update: function () {    
  }
});

var config = {
  type: Phaser.AUTO,
  width: 920,
  height: 720,
  physics: {
    default: 'arcade'
  },
  //set background color
  backgroundColor: "#000000",
  scale: {
    //we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  //set scenes
  scene: [GameScene1,GameScene2]

};
var game = new Phaser.Game(config);