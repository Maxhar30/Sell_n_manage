module.exports ={
    index: (req, res) =>{
       res.render('main/index');
    },
    login: (req, res) =>{
        res.render('main/login');
     },
     signUp: (req, res) =>{
        res.render('main/index');
     },
     services: (req, res) =>{
        res.render('main/services');
     },
     pricing: (req, res) =>{
        res.render('main/pricing');
     },
     contact: (req, res) =>{
      res.render('main/contact');
     },
};