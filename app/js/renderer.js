class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
    }

    draw(model, layer) {
        const sprites = new Image();
        sprites.src = model.src || model.sprites[model.power];
        this.canvas[layer].drawImage(
            sprites,
            model.spriteX, model.spriteY, model.width, model.height,
            model.x, model.y, model.width, model.height);
    }

    clean(layers = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]) {
        layers.forEach(layer => {
            this.canvas[layer.id].clearRect(
                layer.x || 0,
                layer.y || 0,
                layer.width || this.canvas[layer.id].canvas.width,
                layer.height || this.canvas[layer.id].canvas.height);
        });
    }

}
export default Renderer;

