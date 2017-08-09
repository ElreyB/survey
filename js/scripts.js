$(document).ready(function() {
  $("#survey-form").submit(function() {
    var nameInput = $("input#name").val();
    var dietaryInput = $("select#dietary").val();
    debugger;
    $(".name").text(nameInput);
    $(".dietary").text(dietaryInput);

    $("#results").show();

    event.preventDefault();
  });
});
