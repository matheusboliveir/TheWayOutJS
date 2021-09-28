const {load} = require('../../json-handler');

const objectsList = load('./app/json/objects.json');

function objectLoader (obj) {
    return Object.assign({
        x: obj.x,
        y: obj.y,
    }, objectsList.blocks[obj.id]);
}

module.exports = objectLoader;