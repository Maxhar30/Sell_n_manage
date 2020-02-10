const Post = require('../models/customermodel').Post;
const Product = require('../models/productModel').Product;
const Note = require('../models/noteModel').Note;

module.exports={
  index: (req, res)=>{
    res.render('management/index');
  },
  product: (req, res)=>{
    Product.find()
    .then(Product =>{
      res.render('management/product',{products: Product});
    });
  },
  addproduct: (req, res)=>{
    res.render('management/addproduct');
  },
  productPost: (req, res)=>{
        const newProduct = new Product({
          pname: req.body.pname,
          pcompany: req.body.pcompany,
          pcode: req.body.pcode,
          pquantity: req.body.pquantity,
          price: req.body.price,
          pprice: req.body.pprice
        });
        newProduct.save().then(post =>{
          console.log('product Posted');
          res.redirect('/management');
        });
  },
  deleteProduct: (req, res)=>{
    Product.findByIdAndDelete(req.params.id)
    .then(deletedProduct =>{

    res.redirect('/management/product/');
    });
  },

  customers: (req, res)=>{
    Post.find().sort({"date": -1}).then(posts =>{
      res.render('management/customers',{posts: posts});
    });
  },
  addcustomer: (req, res)=>{
    res.render('management/addcustomers');
  },

  customersPost: (req, res)=> {
         const newPost = new Post({
           name: req.body.name,
          title: req.body.title,
          company: req.body.company,
          email: req.body.email,
          contact: req.body.contact
         });
      newPost.save().then(post => {
        console.log('Done');
        res.redirect('/management');
      }); 
  },
  deletePost: (req, res) =>{
    Post.findByIdAndDelete(req.params.id)
    .then(deletedPost =>{
        req.flash('success-message', `Post ${deletedPost.title} Deleted SuccessFully`);
        res.redirect('/management/customer');
    });
},

  invoice: (req, res)=>{
    res.render('management/invoice');
  },
  notes: (req, res)=>{
    Note.find().then(notes =>{
      res.render('management/notes',{notes: notes});
    })
  },
  addnotes: (req, res)=>{
    res.render('management/addnotes');
  },
  notePost: (req, res)=>{
    const newNote = new Note({
      ntitle : req.body.ntitle,
      note : req.body.note,
      notedate : req.body.notedate    
    });
    newNote.save().then(post =>{
      console.log('Note Added Successfully');
      res.redirect('/management');
    })
  }
};