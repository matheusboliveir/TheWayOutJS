class Controls {

    constructor(player) {
        this.player = player;
        this.keysIndex = [37, 38, 39, 40];
        this.countAnimation = 0;
        this.move = 0;
        this.spriteLine = {
            38: player.height * 3,
            40: 0,
            37: player.height, 
            39: player.height * 2
        }
    }
    KeyAction(key, canvas) {
        const commands = {
            38(player, spriteLine) {
                if (player.y - 1 >= 0) {
                    player.y -= 2;
                    player.spriteY = spriteLine[38];
                }
            },
            40(player, spriteLine) {
                if (player.y < canvas.canvas.height - player.height) {
                    player.y += 2;
                    player.spriteY = spriteLine[40];
                }
            },
            37(player, spriteLine) {
                if (player.x - 1 >= 0) {
                    player.x -= 2;
                    player.spriteY = spriteLine[37];
                }
            },
            39(player, spriteLine) {
                if (player.x < canvas.canvas.width - player.width) {
                    player.x += 2;
                    player.spriteY = spriteLine[39];
                }
            }
        }
        this.keysIndex.forEach(e => {
            if (key.akp[e]) {
                commands[e](this.player,this.spriteLine);
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
                if(keysPressed.length >= 3) {
                    this.player.spriteY = this.spriteLine[
                        keys[37] ? 37 : 39
                    ];
                    this.animate();
                }else{
                    this.player.spriteY = this.spriteLine[lkp];
                    this.player.spriteX = 0;
                }
                break;
            case keys[37] && keys[39]:
                if(keysPressed.length >= 3) {
                    this.player.spriteY = this.spriteLine[
                        keys[38] ? 38 : 40
                    ];
                    this.animate();
                }else{
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

    animate(){
        this.countAnimation++;
        if (this.countAnimation >= 44) {
            this.countAnimation = 0;
        }
        this.player.spriteX = Math.floor(this.countAnimation / 4) * this.player.width;
    }

}

module.exports = Controls;