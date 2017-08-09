$(document).ready(function() {
  $("#name-form").submit(function() {
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    $("#results").show();

    event.preventDefault();
  });
});
