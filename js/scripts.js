$(document).ready(function() {
  $("#survey-form").submit(function() {
    var nameInput = $("input#name").val();
    var dietaryInput = $("select#dietary").val();
    var drinkInput = $("input:radio[name=drink]:checked").val();
    var eventDateInput = $("#event-date").val();
    debugger;
    $(".name").text(nameInput);
    $(".dietary").text(dietaryInput);
    $(".drink").text(drinkInput);
    $(".event-date").text(eventDateInput);

    $("#results").show();

    event.preventDefault();
  });
});
