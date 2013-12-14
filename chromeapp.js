var blacklist = ["www.reddit.com", "www.tumblr.com"];

function newDoc()
  {
  window.location.assign("http://www.google.com")
  }

function checkBlacklist()
  {
    for(i=0; i<blacklist.length; i++) {
    if (window.location.hostname === blacklist[i]) {
      newDoc();
    } else {
      console.log("It's cool.");
    }
  }
}

window.onLoad = checkBlacklist();
