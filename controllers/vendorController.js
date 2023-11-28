const Food = require('../models/food')
const Offer = require('../models/offer')
const Order = require('../models/order')
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


  
const  vendorLogin = async (req, res) => {

    
    
};


const  getVendorProfile = async (req, res) => {
    
};

const  updateVendorProfile = async (req, res) => {
    
};



const  updateVendorService = async (req, res) => {
    
};


const  addSingleFood = async (req, res) => {
    
};

const  getAllFoods = async (req, res) => {

    const foods = await Food.find({});

    res.status(StatusCodes.OK).json({ foods });
    
};

const  getCurrentOrder = async (req, res) => {
    
};

const  getOrderDetails = async (req, res) => {
    
};

const  processOrder = async (req, res) => {
    
};





const  getAllOffers = async (req, res) => {

    const offers = await Offer.find({})
    res.status(StatusCodes.OK).json({offers}) 
    
};



const  addSingleOffer = async (req, res) => {

    const { id: productId } = req.params;

    const product = await Product.findOne({ _id: productId }).populate('reviews');
  
    if (!product) {
      throw new CustomError.NotFoundError(`No product with id : ${productId}`);
    }
  
    res.status(StatusCodes.OK).json({ product });
    
};



const  editSingleOffer = async (req, res) => {
    
};














module.exports = {

    vendorLogin,
    getVendorProfile,
    updateVendorProfile,
    updateVendorService,
    addSingleFood,
    getAllFoods,
    getCurrentOrder,
    getOrderDetails,
    processOrder,
    getAllOffers,
    addSingleOffer,
    editSingleOffer

};
