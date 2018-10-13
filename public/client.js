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

   // $('body').append('<div class="tweet">' + tweet + '</div>');

   console.log(tweet);
  var x= twttr.widgets.createTweet(
      tweet,
      document.getElementById('container')
      
        
        
      ).then( function(){

        console.log(x);

         console.log('Tweet added.');
    
});
});
  });


/*


twttr.ready( function (twttr) {
  twttr.widgets.createTweet.then(
    tweet,
    document.getElementById('container')
    
    
    
  ).then( function( el ) {
console.log('Tweet added.');
}
);
});
*/
 