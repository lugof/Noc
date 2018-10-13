

$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {

    $('body').append('<div class="tweet">' + tweet + '</div>'
    
        
        
      ).then( function(){

        console.log(tweet);

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
 