const sequelize = require('../db');
const Shoe = require('../models/Shoe');
const debug = require('debug')('app:controllers');
const {validationResult} = require('express-validator');

/**
 * @desc Gets all sneakers
 * @route GET /api/sneakers
 * @access Public
 */
exports.getAllShoes = async (req, res) => {
    try {
        // GET ALL SHOES
        const shoes = await Shoe.findAll();

        if(!shoes) {
            res.status(400).json({
                success: false,
                message: 'No shoes found!',
            });
        } else {
            res.status(200).json({
                shoes,
                success: true,
                message: 'All shoes returned'
            })
        }
    } catch (error) {
        debug(error);
        res.status(400).json({
            success: false,
            message: `ERROR: ${error.message}`
        });
    }
}


/**
 * @desc Get one shoe by id
 * @route GET /api/sneakers/:id
 * @access Public
 */
exports.getShoeById = async (req, res) => {
    try {

    } catch (error) {

    }
}


/**
 * @desc Delete a shoe
 * @route DELETE /api/sneakers/delete/:id
 * @access Private
 */
exports.deleteShoeById = async (req, res) => {
    try {

    } catch (error) {

    }
}


/**
 * @desc Create a single shoe
 * @route POST /api/sneakers/create
 * @access Private
 */
exports.createShoe = async (req, res) => {
    try {

    } catch (error) {

    }
}



/**
 * @desc Update a shoe
 * @route PUT /api/sneakers/:id
 * @access Private
 */
exports.updateShoe = async (req, res) => {
    try {

    } catch (error) {

    }
}