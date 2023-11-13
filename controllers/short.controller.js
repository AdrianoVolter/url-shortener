const { Link } = require("../models/links");

module.exports= {
    async stats (req, res, next) {
        const short = req.params.short;
        const result = await Link.findOne({
            where: {
                short,
            },
        });
        if (!result) return res.status(404).send("Not Found");

        res.render("stats", result.dataValues);
    }
}