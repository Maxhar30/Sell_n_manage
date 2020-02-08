module.exports ={
  selectOption : function(status, options){
      return options.fn(this).replace(new RegExp('values=\"'+status+'\"'), '$&selected ="selected"')
  }
};