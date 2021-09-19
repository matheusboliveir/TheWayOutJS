const { load } = require('../../json-handler');
const renderer = require('./renderer-handler');

const stages = load('./app/json/stages.json');
const objs = load('./app/json/objects.json');

module.exports = {

    newGame() {

    },

    loadSave(save, layers) {
        layers[0].canvas.style.background = `url(${stages[save.stage.name].map}) no-repeat center/contain`;

        save.stage.room.blocks.forEach(block => {
            let template = Object.assign({
                x: block.x,
                y: block.y,
            }, objs.blocks[block.id]);
            renderer.loadImage(template).then( img =>
                renderer.draw(layers, template, 0, img)
            );
        })
    }

}