const Footer = require('../models/footer');
//----------------------------------->

//----------------------------------------------------------------------->

exports.addFooter = async (req, res) => {
  const title = req.body.title;
  const links = req.body.link;

  const Footer = new Footer({
    title, links
  });

  Footer.save()
    .then((result) => res.status(201).json(result))
    .catch(err => res.status(400).json('Error: ' + err));
};

//all links
exports.getFooter = async (req, res) => {
  Footer.find()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json('Error: ' + err));

};

//deleting links
exports.deleteFooter = async (req, res) => {
  const id = req.params.id;
  Footer.findByIdAndDelete(id)
    .then(() => res.status(204).json('Link deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
};


exports.getFooterFromcategory = async (req, res) => {
  const id = req.params.id;
  Footer.findById(id)
    .then(result => {
      res.render('edit', { footer_data: result });
    })
    .catch(err => {
      console.log(err);
    });

};

exports.updateFooter = async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const links = req.body.link;

  Footer.findByIdAndUpdate(id, {
    $set: {
      title: title,
      links: links
    }
  }, { useFindAndModify: false })
    .then(() => res.status(201).json('Link Updated Successfully!'))
    .catch(err => res.status(404).json('Error: ' + err));
};
