const fs = require("fs");

class FilesController {
    async getAllFiles (req, res) {
        const base = './files/';

        let files = fs.readdirSync(base);
        res.json({filesNames: files});
    }
}

module.exports = new FilesController();