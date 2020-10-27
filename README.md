This is a Readme file for the HTML5 Phaser example.
The index.html file contains the html code while game.js file contains the whole JavaScript content.

This is an example for changing the scenes when an object hits a certain value on x-axis using basic HTML, Phaser and JavaScript. <br>

The update:function contains the most important part of this example: 

if(this.pikachu.x== 700){          
        this.scene.start('GameScene2'); 
 
This defines if the value of x is 700 for the object's position it will trigger to load "GameScene2" i.e. the next scene. 

