import actions from './actions.js';
import keys from './keyboard-listener.js';
const ctx = document.querySelector("canvas").getContext('2d');
const body = document.querySelector("body");

const player = {
    life: 3,
    power: "child",
    score: 0,
    death: 0,
    x: 10,
    y: 10,
    width: 22,
    height: 29,
    spriteX: 0,
    spriteY: 0,
    sprites:{
        child: "./sprites/sprite-test01.png",
        shot: "",
        sword: "",
        fire: "",
        rope: ""
    }
}
const sprite = new Image();
const action = new actions(player);
render();
function render(){
    sprite.src = player.sprites[player.power];
    //ctx.canvas.width = body.clientWidth;
    //ctx.canvas.height = body.clientHeight;
    action.KeyAction(keys,ctx);
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.drawImage(sprite,player.spriteX,player.spriteY,player.width,player.height,player.x,player.y,player.width,player.height);
    window.requestAnimationFrame(()=>render());
};
