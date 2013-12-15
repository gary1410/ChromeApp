localStorage.startTime = 9
localStorage.endTime = 15
localStorage.weekdaysArray = [1,2,3]

var start = localStorage.startTime
var end = localStorage.endTime
var weekdays = localStorage.weekdaysArray

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

//window.onLoad=checkDay();
