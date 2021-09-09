export class Controls {

    constructor(player) {
        this.player = player;
        this.keysIndex = [87, 65, 83, 68];
        this.countAnimation = 0;
        this.move = 0;
    }
    KeyAction(teclas, canvas) {
        const commands = {
            87(player) {
                if (player.y - 1 >= 0) {
                    player.y -= 2;
                    player.spriteY = player.height * 3;
                }
            },
            83(player) {
                if (player.y < canvas.canvas.height - player.height) {
                    player.y += 2;
                    player.spriteY = 0;
                }
            },
            65(player) {
                if (player.x - 1 >= 0) {
                    player.x -= 2;
                    player.spriteY = player.height;
                }
            },
            68(player) {
                if (player.x < canvas.canvas.width - player.width) {
                    player.x += 2;
                    player.spriteY = player.height * 2;
                }
            }
        }
        this.keysIndex.map(e => {
            if (teclas[e]) {
                commands[e](this.player);
                this.move = e;
            }
        });
        this.animation(teclas, this.move);
    }
    animation(teclas, e) {
        switch (true) {
            case teclas[87] && teclas[83]:
                this.player.spriteX = 0;
                break;
            case teclas[65] && teclas[68]:
                this.player.spriteX = 0;
                break;
            case teclas[e]:
                this.countAnimation++;
                if (this.countAnimation >= 44) {
                    this.countAnimation = 0;
                }
                this.player.spriteX = Math.floor(this.countAnimation / 4) * this.player.width;
                break;
            default:
                this.player.spriteX = 0;
                break;
        }
    }
}