import {Controls} from './controls.js';
import Renderer from './renderer.js';
import keys from './keyboard-listener.js';
const stage = require('../JSON/stages.json');

const Layers = bgLayer = [
    document.querySelector("#backgroundLayer").getContext('2d'),
    document.querySelector("#playerLayer").getContext('2d'),
    document.querySelector("#mobLayer").getContext('2d'),
    document.querySelector("#overlayLayer").getContext('2d'),
];

console.log(stage);

const player = {
    life: 3,
    power: "shild",
    score: 0,
    death: 0,
    x: 10,
    y: 10,
}

const bob = {
    src: "../images/blocks/shildBlocks.png",
    x: 30,
    y: 30,
    width: 22,
    height: 29,
    spriteX: 0,
    spriteY: 0,
}

const action = new Controls(player);
const renderer = new Renderer(Layers);



//start();
function start(){
    action.KeyAction(keys,ctx);
    renderer.clean();
    renderer.draw(bob);
    renderer.draw(player);
    window.requestAnimationFrame(()=> start());
};
