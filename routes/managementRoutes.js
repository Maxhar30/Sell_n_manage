const express = require('express');
const router = express.Router();
const managementRoutes = require('../controllers/managementControllr');

router.all('/*', (req, res, next)=>{
     req.app.locals.layout = 'management';
     next();
})

router.route('/')
    .get(managementRoutes.index);

router.route('/product')
    .get(managementRoutes.product);

router.route('/add-product')
    .get(managementRoutes.addproduct)
    .post(managementRoutes.productPost);

router.route('/product/delete/:id')
    .delete(managementRoutes.deleteProduct);

router.route('/editproduct/:id')
    .get(managementRoutes.editProduct);
    //.put(manageController.editProductSubmit);
    

router.route('/customer')
    .get(managementRoutes.customers);

router.route('/add-customer')
    .get(managementRoutes.addcustomer)
    .post(managementRoutes.customersPost);

router.route('/customer/delete/:id')
    .delete(managementRoutes.deletePost);

router.route('/editcustomer/:id')
    .get(managementRoutes.editCustomer);
    //.put(manageController.editProductSubmit);

router.route('/invoice')
    .get(managementRoutes.invoice);

router.route('/notes')
    .get(managementRoutes.notes)
    .post(managementRoutes.notePost);

router.route('/add-notes')
    .get(managementRoutes.addnotes)
    .post(managementRoutes.notePost);
    
router.route('/notes/delete/:id')
    .delete(managementRoutes.deleteNote);

router.route('/editnote/:id')
    .get(managementRoutes.editNote);
    //.put(manageController.editProductSubmit);



module.exports = router;
