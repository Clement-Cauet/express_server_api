const Restau = require('../models/model');

exports.getAll = (req, res) => {
    Restau.find().sort({code: -1}).limit(5)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ error }));
};

exports.getRestauById = (req, res) => {
    Restau.findById(req.params.id )
        .then(data => res.status(200).json(data))
        .catch(error => res.status(404).json({ error }));
};

exports.getRestauByCode = (req, res) => {
    Restau.findOne({ code: req.params.code })
        .then(data => res.status(200).json(data))
        .catch(error => res.status(404).json({ error }));
};

exports.createRestau = (req, res) => {
    const newRestau = new Restau({
        ...req.body
    });
    newRestau.save()
        .then(() => res.status(201).json({ message: 'Donnée enregistrée !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.updateRestau = (req, res) => {
    Restau.findOneAndUpdate({ code: req.params.code }, req.body, { new: true })
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteRestau = (req, res) => {
    Restau.findOneAndDelete({ code: req.params.code })
        .then(() => res.status(200).json({ message: 'Donnée supprimée !'}))
        .catch(error => res.status(400).json({ error }));
};