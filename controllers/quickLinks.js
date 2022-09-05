const QuickLinks = require('./../models/quickLinks');
//----------------------------------->

//----------------------------------------------------------------------->

//adding new link


exports.addNews = async (req, res) => {
  const title = req.body.title;
  const links = req.body.link;

  const quicklink = new Quicklink({
    title, links
  });

  quicklink.save()
    // const quicklink= new Quicklink({
    //   title:'Admission',
    //   links:'https://www.nitj.ac.in/#'
    // });
    // quicklink.save()
    .then((result) => res.status(201).json(result))
    .catch(err => res.status(400).json('Error: ' + err));
};

//all links
exports.getQuicklinks = async (req, res) => {
  Quicklink.find()


    .then(result => res.status(200).json(result))
    .catch(err => res.status(404).json('Error: ' + err));

};

//deleting links
exports.deleteQuicklink = async (req, res) => {
  const id = req.params.id;

  Quicklink.findByIdAndDelete(id)
    .then(() => res.status(204).json('Link deleted.'))
    .catch(err => res.status(404).json('Error: ' + err));
};


exports.getQuicklinksFromcategory = async (req, res) => {
  const id = req.params.id;
  Quicklink.findById(id)
    .then(result => {
      res.render('edit', { footer_data: result });
    })
    .catch(err => {
      console.log(err);
    });

};

exports.updateQuicklinks = async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const links = req.body.link;

  Quicklink.findByIdAndUpdate(id, {
    $set: {
      title: title,
      links: links
    }
  }, { useFindAndModify: false })
    .then(() => res.status(201).json('Link Updated Successfully!'))
    .catch(err => res.status(404).json('Error: ' + err));
};
