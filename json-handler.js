const jsonfile = require('jsonfile');
const { readdirSync } = require('fs');

module.exports = {
    
    listSaves() {
        return readdirSync('./app/json/saves');
    },

    load(json) {
        return jsonfile.readFileSync(json,{throws: false});
    },
    
    createSave(json,save) {
        return jsonfile.writeFileSync(json, save,{flag:'a', spaces: 2});
    }

}