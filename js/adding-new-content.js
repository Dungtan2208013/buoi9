$(function (){
  $('ul').before('<p class="notice">Just updated</p>');
  $('li.hot').prepend('+');
  var $newListItem = $('<li><em>gluten-free</em></li>');
  $('li:last').after($newListItem);
})
