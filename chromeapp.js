var blacklist = ["www.reddit.com", "www.tumblr.com"];

var Controller = {
  init: function(){
    this.checkBlacklist()
    this.submit()
  },

  checkBlacklist: function(){
    for(i=0; i<blacklist.length; i++) {
      if (window.location.hostname === blacklist[i]) {
        newDoc();
      } else {
        console.log("It's cool.");
      }
    }
  },

  newDoc: function(){
    window.location.assign("http://www.google.com")
  },

  submit: function(){
    $("#website_submission").submit(function(){
      var $inputs = $("#website_submission :input");
      var value = {};
      $inputs.each(function(){
        value[this.name] = $(this).val();
        debugger
      })
    })
  }
};

$(document).ready(function(){
  Controller.init();
})
