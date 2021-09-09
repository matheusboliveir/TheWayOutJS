function createGame(){
    const state = {
        players: {},
        mobs: {}
    }
    function addPlayer(command){
        const playerID = command.playerID;
        const playerX = command.playerX;
        const playerY = command.playerY;
        
        state.players[playerID] = {
            x: playerX,
            y: playerY
        }
    }
    function removePlayer(command){
        const playerID = command.playerID;
         delete state.players[playerID];
    }
    function addMob(command){
        const mobID = command.mobID;
        const mobX = command.mobX;
        const mobY = command.mobY;
        const width = command.width;
        const height = command.height;
        const mobType = command.mobType;
        state.mobs[mobID] = {
            x: mobX,
            y: mobY,
            type: mobType
        }
    }
    function removeMob(command){
        const mobID = command.mobID;
        delete state.mobs[mobID];
    }
    function actionPlayer(command, screen){
        const acceptedActions ={
            ArrowDown(player){
                if (player.y + 1 < screen.height) {
                    player.y ++;
                }
            },
            ArrowUp(player){
                if (player.y - 1 >= 0) {
                    player.y --;
                }
            },
            ArrowRight(player){
                if (player.x + 1 < screen.width) {
                    player.x ++; 
                }
            },
            ArrowLeft(player){
                if (player.x - 1 >= 0) {
                    player.x --;    
                }
            }
        }
        const keyPressed = command.keyPressed;
        const playerID = command.playerID;
        const player = state.players[playerID];
        const moveFunction = acceptedActions[keyPressed];
        
        if (player && moveFunction) {
            moveFunction(player)
            mobCollision(playerID)
        }
    }

    function mobCollision(playerID){
        const player = state.players[playerID];

        for (const mobID in state.mobs){
            const mob = state.mobs[mobID];
            
        }
    }
}