const express = require('express');
const router = express.Router();
const animalController = require('../Controllers/animalController');

router.get('/', animalController.getAllAnimals);
router.post('/', animalController.addAnimal);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;

