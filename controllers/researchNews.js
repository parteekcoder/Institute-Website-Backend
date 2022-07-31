const ResearchNews = require('./../models/researchNews');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addResearchNews = async (req, res) => {
    const researchTitle = req.body.researchTitle;
    const researchText = req.body.researchText;
    const date = Date.parse(req.body.date);

    const researchnews = new Researchnews({
        researchTitle,
        researchText,
        date
    });

    researchnews.save()
        .then(() => res.json('News Added!'))
        .catch(err => res.status(400).json('Error: ' + err));

}
