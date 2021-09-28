const objectloader = require('./object-loader');

function collision(player, blocks, axis, direction) {
    let canWalk = true;
    let reAxis = axis == 'x' ? 'y' : 'x';
    let dimensions = [
        axis == 'x' ? 'width' : 'height',
        axis == 'x' ? 'height' : 'width'
    ];
    let size = [
        player[axis] + player[dimensions[0]],
        player[reAxis] + player[dimensions[1]]
    ];

    blocks.forEach(block => {
        let blockLoaded = objectloader(block);

        let blockSize = [
            blockLoaded[axis] + blockLoaded[dimensions[0]],
            blockLoaded[reAxis] + blockLoaded[dimensions[1]]
        ];

        if (size[1] > blockLoaded[reAxis] && player[reAxis] < blockSize[1] && axis == 'y') {
            if (player[axis] + 16 == blockSize[0] && direction == '-'
                || size[0] + 1 == blockLoaded[axis] && direction == '+') {
                canWalk = false;
            }
        }
        if (size[1] > blockLoaded[reAxis] && player[reAxis] < blockSize[1]-16 && axis == 'x') {
            if (player[axis] == blockSize[0] && direction == '-'
                || size[0] == blockLoaded[axis] && direction == '+') {
                canWalk = false;
            }

        }

    })

    return canWalk;

}

module.exports = collision;