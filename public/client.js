
var arr2=[];
$(function(){
  var socket = io.connect();
  socket.on('stream', function(tweet) {
    


    $('body').append('<div class="tweet">' + tweet + '</div>');

arr2.push(tweet);
console.log(arr2);

      i++;

});
});