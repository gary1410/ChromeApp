var start = 9
var end = 17

var weekdays = [1,2,3,4,5,6];

var today = new Date()

function newDoc()
  {
  window.location.assign("http://www.google.com")
  }

function checkHours() {
  current = today.getHours();
  if (start < current && current < end) {
    newDoc();
  }
}

function checkDay() 
  {
    for(i=0; i<weekdays.length; i++) {
      if (today.getDay() === weekdays[i]) {
        checkHours();
      }
    }
  }

window.onLoad=checkDay();