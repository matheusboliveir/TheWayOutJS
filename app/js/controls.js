const colision = require('./collision-detector');
class Controls {

    constructor(save) {
        this.player = save.player;
        this.keysIndex = [37, 38, 39, 40];
        this.countAnimation = 0;
        this.move = 0;
        this.spriteLine = {
            38: this.player.height * 3,
            40: 0,
            37: this.player.height,
            39: this.player.height * 2
        };
        this.blocks = save.stage.room.blocks;

    }
    KeyAction(key, canvas) {
        const commands = {
            38(player, spriteLine, blocks) {
                player.spriteY = spriteLine[38];
                if (player.y - 1 >= 0
                    && colision(player, blocks, 'y', '-')) {
                    player.y -= 2;
                }
            },
            40(player, spriteLine, blocks) {
                player.spriteY = spriteLine[40];
                if (player.y < canvas.canvas.height - player.height
                    && colision(player,blocks,'y','+')) {
                    player.y += 2;
                }
            },
            37(player, spriteLine, blocks) {
                player.spriteY = spriteLine[37];
                if (player.x - 1 >= 0
                    && colision(player,blocks,'x','-')) {
                    player.x -= 2;
                }
            },
            39(player, spriteLine, blocks) {
                player.spriteY = spriteLine[39];
                if (player.x < canvas.canvas.width - player.width
                    && colision(player,blocks,'x','+')) {
                    player.x += 2;
                }
            }
        }
        this.keysIndex.forEach(e => {
            if (key.akp[e]) {
                commands[e](this.player, this.spriteLine, this.blocks);
                this.move = e;
            }
        });
        this.animationHandler(key.akp, this.move, key.lkp);
    }
    animationHandler(keys, e, lkp) {
        let keysPressed = keys.filter(a => a === true);

        switch (true) {
            case keys[38] && keys[40] && keys[37] && keys[39]:
                this.player.spriteY = this.spriteLine[lkp];
                this.player.spriteX = 0;
                break;
            case keys[38] && keys[40]:
                if (keysPressed.length >= 3) {
                    this.player.spriteY = this.spriteLine[
                        keys[37] ? 37 : 39
                    ];
                    this.animate();
                } else {
                    this.player.spriteY = this.spriteLine[lkp];
                    this.player.spriteX = 0;
                }
                break;
            case keys[37] && keys[39]:
                if (keysPressed.length >= 3) {
                    this.player.spriteY = this.spriteLine[
                        keys[38] ? 38 : 40
                    ];
                    this.animate();
                } else {
                    this.player.spriteY = this.spriteLine[lkp];
                    this.player.spriteX = 0;
                }
                break;
            case keys[e]:
                this.animate();
                break;
            default:
                this.player.spriteX = 0;
                break;
        }
    }

    animate() {
        this.countAnimation++;
        if (this.countAnimation >= 44) {
            this.countAnimation = 0;
        }
        this.player.spriteX = Math.floor(this.countAnimation / 4) * this.player.width;
    }

}

module.exports = Controls;