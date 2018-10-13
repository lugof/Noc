

$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {

    
    var x=   twttr.widgets.createTweet(tweet,document.getElementById('container')
        
        
        
      ).then( function(){

        $('body').append('<div class="tweet">' + x + '</div>');

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
 