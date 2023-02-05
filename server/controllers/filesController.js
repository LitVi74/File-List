const fs = require("fs");

const base = './files/';

class FilesController {
    async getAllFiles (req, res) {
        let files = fs.readdirSync(base);
        res.setHeader(
            "Access-Control-Allow-Origin",
            "http://localhost:3000"
        );
        res.json({filesNames: files});
    }

    async getOneFile (req, res) {
        const {filename} = req.params;
        let fileContent = fs.readFileSync(base + filename, "utf8");

        res.setHeader(
            "Access-Control-Allow-Origin",
            "http://localhost:3000"
        );
        res.json({
            fileContent,
        });
    }
}

module.exports = new FilesController();