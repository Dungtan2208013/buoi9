$(function(){
  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');


  $newItemButton.show();
  $newItemButton.hide();

  $('#showForm').on('click',function (){
    $newItemButton.hide();
    $newItemForm.show();
  });
  #newItemForm.om('submit',function (e){
    e.preventDefault();
    var newText = $textInput.var();
    $('li:last').after('<li>' + newText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');

  });
});
