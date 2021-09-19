module.exports = {

    loadImage(model) {
        return new Promise(resolve => {
            let sprite = new Image();
            sprite.src = model.src || model.sprites[model.power[0]];
            sprite.onload = () => {
                resolve(sprite);
            };
        });
    },

    draw(canvas, model, layer, img) {

        canvas[layer].drawImage(
            img,
            model.spriteX, model.spriteY, model.width, model.height,
            model.x, model.y, model.width, model.height)

    },

    clean(canvas, configs = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]) {
        configs.forEach(config => {
            canvas[config.id].clearRect(
                config.x || 0,
                config.y || 0,
                config.width || this.canvas[config.id].canvas.width,
                config.height || this.canvas[config.id].canvas.height);
        });
    }

};

