const  Link  = require("../models/links");
const generateRandomString = require("../services/generateString");

module.exports= {
    async stats (req, res) {
        const short = req.params.short;
        
        const result = await Link.findOne({
            where: {
                short
            }
        });


        if (!result) return res.status(404).send("Not Found");

        res.render("stats", result.dataValues);
    },

    async getShort (req, res) {
        const short = req.params.short;
        
        const result = await Link.findOne({
            where: {
                short
            }
        });

        if (!result) return res.status(404).send("Not Found");

        result.hits++;
        await result.save();

        res.redirect(result.url);
    },
    
    async new (req, res) {
        const url = req.body.url;
        const short = generateRandomString();
        const result = await Link.create({
            url,
            short,
        });

        res.render("stats", result.dataValues);
    },

    async homePage (req, res) {
        res.render("index", { title: "Encurtador URL" });
    }
       
}