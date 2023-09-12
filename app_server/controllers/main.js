const res = require("express/lib/response");

/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways'});
};
module.exports = {
    index
}