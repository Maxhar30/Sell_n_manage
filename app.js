const express = require('express');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const path = require('path');
const {selectOption} = require('./config/customFunction');
const {mongoDbUrl, PORT} = require('./config/configuration');
const session = require('express-session');
const flash = require('express-flash-messages');
const {globalVariables} = require('./config/configuration');
var HandlebarsIntl = require('handlebars-intl');
var Handlebars     = require('handlebars');
var methodOverRide =  require('method-override');



const app = express();

// HandleBars Date Formatter
HandlebarsIntl.registerWith(Handlebars);    

// Database addation
mongoose.connect(mongoDbUrl, { useNewUrlParser: true })
   .then( response =>{
       console.log("MongoDB Connected Successfully");
   }).catch(err =>{
       console.log("Database Connection failed");
   });


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Method OverRide For Deleteing Post
app.use(methodOverRide('newMethod'));

app.use(session({
    secret : 'anysecret',
    saveUninitialized: true,
    resave: true
}));


app.use(flash());
app.use(globalVariables);

/**Setting Engine  */
app.engine('handlebars', hbs({defaultLayout: 'main', helpers: {select: selectOption}}));
app.set('view engine', 'handlebars');

// Routes Setting
const mainRoutes = require('./routes/mainRoutes');
const managementRoutes = require('./routes/managementRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/', mainRoutes);
app.use('/management', managementRoutes);
//app.use('/backManager', adminRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
});