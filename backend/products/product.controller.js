const express = require('express');
const router = express.Router();
const productService = require('./product.service');


router.post('/list', list_product);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

function list_product(req, res, next){
    productService.create(req.body)
        .then(() => req.json({message: 'Product listed successfully'}))
        .catch(next);
}

function getAll(req, res, next){
    productService.getAll()
        .then(products => res.json(products))
        .catch(next);
}

function getById(req, res, next){
    productService.getById(req.params.id)
        .then(user => res.json(product))
        .catch(next);
}

function update(req, res, next) {
    productService.update(req.params.id, req.body)
        .then(product => res.json(product))
        .catch(next);
}

function _delete(req, res, next) {
    productService.delete(req.params.id)
        .then(() => res.json({ message: 'Product deleted successfully' }))
        .catch(next);
}