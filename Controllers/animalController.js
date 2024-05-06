const Animal = require('../Models/Animal');

exports.getAllAnimals = async (req, res) => {
    const animals = await Animal.find();
    res.json(animals);
};

exports.addAnimal = async (req, res) => {
    const newAnimal = new Animal(req.body);
    const savedAnimal = await newAnimal.save();
    res.status(201).json(savedAnimal);
};

exports.updateAnimal = async (req, res) => {
    const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAnimal);
};

exports.deleteAnimal = async (req, res) => {
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    res.json(deletedAnimal);
};

