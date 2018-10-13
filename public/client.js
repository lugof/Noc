

$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {
    
    twttr.ready( function (twttr) {
      twttr.widgets.createTweet.then(
        tweet,
        document.getElementById('container')
        
        
        
      ).then( function( el ) {
    console.log('Tweet added.');

    

arr2.push(tweet);
console.log(arr2);

      

});
});
  });
})

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
 