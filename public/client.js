

$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {
    
    
        $('body').append('<div class="tweet">' + twttr.widgets.createTweet(tweet)+ '</div>'
        
        
        
      ).then( function( el ) {
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
 