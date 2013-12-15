var start = parseInt(localStorage.startTime)
var end = parseInt(localStorage.endTime)

var today = new Date()

var blacklist = localStorage.getItem("blacklist") || '[]'

var Controller = {
  init: function(){
    this.checkDay()
    this.submit_url()
    this.submit_time()
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

  submit_url: function(){
    $("#website_submission").on('submit', function(e){
      e.preventDefault();
      // e.stopPropagation();
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
  },

  submit_time: function(){
    $("#set_time").on('submit', function(e){
      e.preventDefault();
      var $inputs = $(":input");
      localStorage.setItem("weekdays_array",'[]')
      $inputs.each(function(){
        if ( this.type === "checkbox" && this.checked ) {
          weekdays = localStorage.getItem("weekdays_array")
          weekdays = JSON.parse(weekdays)
          weekdays.push(this.value)
          weekdays = JSON.stringify(weekdays)
          localStorage.setItem("weekdays_array",weekdays)
        }
      })
      localStorage.startTime = document.getElementById("start_time").value
      localStorage.endTime = document.getElementById("end_time").value
    })
  },

  checkHours: function(){
    current = today.getHours();
    if (start < current && current < end) {
      checkBlacklist();
    }
  },

  checkDay: function(){
    weekdays = localStorage.getItem("weekdays_array") || '[]'
    weekdays = JSON.parse(weekdays) 
    for(i=0; i<weekdays.length; i++) {
      if (today.getDay() === weekdays[i]) {
        checkHours();
      }
    }
  }

}




$(document).ready(function(){
  Controller.init();
})
