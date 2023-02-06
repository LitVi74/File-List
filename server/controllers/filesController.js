// controllers/filesController.js

const fs = require("fs");

const base = './files/';

class FilesController {
    async getAllFiles (req, res) {
        let files = fs.readdirSync(base);

        let data = files.map(file => {
            let fileContent = fs.readFileSync(base + file, "utf8");

            return {
                name: file,
                content: fileContent,
            }
        })

        res.setHeader(
            "Access-Control-Allow-Origin",
            "http://localhost:3000"
        );
        res.json(data);
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

    async uploadFile (req, res) {
        try {
            const file = req.file;

            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            return res.status(200).json({message: "ok"});

        }catch (e) {
            console.log(e);
            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            return res.status(500).json({message: "Upload file error"});
        }
    }

    async downloadFile (req, res) {
        try {
            let filename = req.query.filename.toString();

            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            return res.download(base + filename, filename)
        }catch (e) {
            console.log(e);
            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            return res.status(500).json({message: "Download file error"});
        }
    }
}

module.exports = new FilesController();