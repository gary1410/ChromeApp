localStorage.startTime = 9
localStorage.endTime = 17

var start = localStorage.startTime
var end = localStorage.endTime

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
  weekdays = localStorage.getItem("weekdays_array") || '[]'
  weekdays = JSON.parse(weekdays) 
  {
    for(i=0; i<weekdays.length; i++) {
      if (today.getDay() === weekdays[i]) {
        checkHours();
      }
    }
  }


//window.onLoad=checkDay();
