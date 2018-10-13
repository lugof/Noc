$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {
    twttr.ready( function (twttr) {
      twttr.widgets.createTweet(
        tweet,
        document.getElementById('container')
        
        
        
      ).then( function( el ) {
  console.log('Tweet added.');
  }
);
});



   // console.log(tweet);
    //$('body').append('<div class="tweet">' + tweet + '</div>');
});
});