

$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {

    
       twttr.widgets.createTweet(tweet,document.getElementById('container')
        
        
        
      ).then( function(){

        twttr.widgets.createTweet(tweet,document.getElementById('container'));
         console.log('Tweet added.');
    
});
});
  });


/*
$('body').append('<div class="tweet">' + tweet + '</div>');

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
 