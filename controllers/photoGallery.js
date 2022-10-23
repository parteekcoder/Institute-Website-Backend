const PhotoGallery = require("../models/photoGallery");
//----------------------------------->

//----------------------------------------------------------------------->
exports.add = async (req, res) => {
  const PhotoGallery = new PhotoGallery({
    image: req.body.image,
  });

  PhotoGallery.save()
    .then(() => res.status(201).send(" added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.get = async (req, res) => {
  PhotoGallery.find({})
    .then((photoGallery) => res.status(200).json(photoGallery))
    .catch((err) => res.status(400).json("Error: " + err));
};


exports.update = async (req, res) => {
  PhotoGallery.findByIdAndUpdate(req.params.id,{
    image: req.body.image,
  })
    .then(() => {
      res.status(200).send(" updated successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.delete = async (req, res) => {
  PhotoGallery.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send("updated successfully");
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
