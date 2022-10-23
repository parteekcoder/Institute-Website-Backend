const Footer = require('../models/footer');
//----------------------------------->

//----------------------------------------------------------------------->
exports.addFooter = async (req, res) => {
  const footer = new Footer( req.body);

   footer.save().then((result) => res.status(201).send("Footer Added Successfully!")).catch(err => res.status(400).json('Error: ' + err));
};

//----------------------------------------------------------------------->
exports.getFooter = async (req, res) => {
  Footer.find({show: true}).then(result => res.status(200).json(result)).catch(err => res.status(404).json('Error: ' + err));
};

exports.getFooterById = async (req, res) => {
  const id = req.params.id;
  Footer.find({ _id: id }).then(result => res.status(200).json(result)).
  catch(err => res.status(404).json('Error: ' + err));

};

exports.updateFooter = async (req, res) => {
  
  Footer.findByIdAndUpdate(id, {
    $set: req.body
  })
    .then(() => res.status(201).json('Link Updated Successfully!'))
    .catch(err => res.status(404).json('Error: ' + err));
};

exports.deleteFooter = async (req, res) => {
  const id = req.params.id;
  Footer.findByIdAndUpdate(id, {
    $set: {show: false}
  }).then(() => res.status(200).json('Link Deleted Successfully!')).
  catch(err => res.status(404).json('Error: ' + err));
};

exports.getFooterAll = async (req, res) => {
  Footer.find({}).then(result => res.status(200).json(result)).catch(err => res.status(404).json('Error: ' + err));
}