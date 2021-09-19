const keysIndex = [37, 38, 39, 40];

let keys = {
    akp: [],
    lkp: 38
};

window.addEventListener('keydown', event => {
    if (keysIndex.find(key => event.keyCode === key))
        keys.akp[event.keyCode] = true;
    keys.lkp = event.keyCode;
}, false);
window.addEventListener("keyup", event => {
    keys.akp[event.keyCode] = false;
}, false);

module.exports = { keys };
