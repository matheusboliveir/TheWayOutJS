const Controls = require('./controls');
const renderer = require('./renderer-handler');
const { keys } = require('./keyboard-listener');
const JsonHandler = require('../../json-handler');
const { loadSave } = require('./stage-loader');

const layers = bgLayer = [
    document.querySelector("#backgroundLayer").getContext('2d'),
    document.querySelector("#playerLayer").getContext('2d'),
    document.querySelector("#mobLayer").getContext('2d'),
    document.querySelector("#overlayLayer").getContext('2d'),
];

const save = JsonHandler.load('./app/json/saves/save-01.json');
const action = new Controls(save);

window.addEventListener('DOMContentLoaded', () => {
    loadSave(save, layers);
    start();
});

function start() {
    renderer.loadImage(save.player).then(img => {
        renderer.clean(layers, [{
            id: 1,
            x: save.player.x,
            y: save.player.y,
            width: save.player.width,
            height: save.player.height
        }]);
        action.KeyAction(keys, layers[1]);
        renderer.draw(layers, save.player, 1, img)
    }).finally(window.requestAnimationFrame(start))
};