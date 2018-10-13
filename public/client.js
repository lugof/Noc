window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t; 
}(document, "script", "twitter-wjs"));



$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {

    var promise1 = Promise.resolve(twttr.widgets.createTweet(tweet,document.getElementById('container'),{theme: 'dark'} ));
      promise1.then( function(value) {
        console.log(value);
        
      });
      }
      );
      });
    




   //$('body').append('<div class="tweet">' + tweet + '</div>')
  
    

  



 