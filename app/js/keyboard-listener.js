
let keys = [];

window.addEventListener('keydown', event =>
{
    keys[event.keyCode] = true;
},false);

window.addEventListener("keyup", event => {
    keys[event.keyCode] = false;
});
export default keys;
