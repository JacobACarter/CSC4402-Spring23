const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll(){
    return await db.Product.findAll();
}

async function getById(id){
    return await getProduct(id);
}

async function create(params){
    await db.Product.create(params);
}

async function update(id, params){
    const product = await getProduct(id);

    Object.assign(product, params);
    await product.save();

    return omitHash(product.get());
}

async function _delete(id){
    const product = await getProduct(id);
    await product.destroy();
}

async function getProduct(id){
    const product = await db.Product.findByPk(id);
    if (!product) throw 'Product not found';
    return product
}

function omitHash(product) {
    const { hash, ...productWithoutHash } = product;
    return productWithoutHash;
}