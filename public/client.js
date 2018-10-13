
$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {
    
   
        $('body').append('<div class="tweet">' + twttr.widgets.createTweet(tweet,document.getElementById('container'))+ '</div>'
        
        
      ).then( function( el ) {
  console.log('Tweet added.');
  }
);
});



   // console.log(tweet);
    //$('body').append('<div class="tweet">' + tweet + '</div>');
});
