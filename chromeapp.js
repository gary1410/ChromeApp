var blacklist = localStorage.getItem("blacklist") || '[]'

var Controller = {
  init: function(){
    this.checkBlacklist()
    this.submit()
  },

  checkBlacklist: function(){
    var blacklist_var = JSON.parse(blacklist)
    for(i=0; i<blacklist_var.length; i++) {
      if (window.location.hostname === blacklist_var[i]) {
        newDoc();
      } else {
        // console.log("It's cool.");
      }
    }
  },

  newDoc: function(){
    window.location.assign("http://www.google.com")
  },

  submit: function(){
    $("#website_submission").on('submit', function(e){
      e.preventDefault();
      // e.stopPropagation();
      console.log("I'm running");
      var $inputs = $("#website_submission :input");
      $inputs.each(function(){
        if ( this.type === "text" ) {
          var websites = localStorage.getItem("blacklist") || '[]'
          websites = JSON.parse(websites)
          websites.push( $(this).val() )
          websites = JSON.stringify(websites)
          localStorage.setItem("blacklist",websites)
        }
      })
    })
  }
}


$(document).ready(function(){
  Controller.init();
})
