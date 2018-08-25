$("#reservation-btn").on("click", function() {
    event.preventDefault();
    var searchedReservation = $("#reservation-search").val().trim();

    // Using a RegEx Pattern to remove spaces from searchedReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedReservation = searchedReservation.replace(/\s+/g, "").toLowerCase();

    // QUESTION: What does $.get do? What are the parameters it is expecting?
    $.get("/api/tables/" + searchedReservation, function(data) {
      console.log(data);
      if (data) {
        $("#info").show();
        $("#name").text(data.name);
        $("#phone").text(data.phone);
        $("#email").text(data.email);
        $("#id").text(data.id);
      }
      else {
        $("#name").text("Here are the results.");
        $("#stats").hide();
      }
    });
  });


  ///************** WAIT LIST ************************* */
//   $("#reservation-btn").on("click", function() {
//     var searchedReservation = $("#reservation-search").val().trim();

//     // Using a RegEx Pattern to remove spaces from searchedReservation
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     searchedReservation = searchedReservation.replace(/\s+/g, "").toLowerCase();

//     // QUESTION: What does $.get do? What are the parameters it is expecting?
//     $.get("/api/tables/" + searchedReservation, function(data) {
//       console.log(data);
//       if (data) {
//         $("#info").show();
//         $("#name").text(data.name);
//         $("#phone").text(data.phone);
//         $("#email").text(data.email);
//         $("#id").text(data.id);
//       }
//       else {
//         $("#name").text("Here are the results.");
//         $("#stats").hide();
//       }
//     });
//   });