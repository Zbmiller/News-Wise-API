// $(".pushToPop").on("click", handleRecentButtonClick)

$(document).ready(function() {
    $('.pushToPop').on('click', function(e){
      console.log($(this).data("title"));

    });
  });

function handleRecentButtonClick(event) {
    // event.preventDefault();
    console.log(this)
    // console.log(event)
//Create the object to be sent to the DB 

  var newArticle = {
    title: event.target.dataset.title,
  }

// Send Post request

  var url = "/api/recentArticle "
  var data = newArticle

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(
    function(result){
      console.log("Article sent to Poular");
      console.log(result)

      // Reload the page to update the button

      // location.reload();
    }

  // $.ajax(url, {
  //   type: "POST",
  //   data: newArticle
  // })
)
};


////////////////////////////////////////////////////////////

 // $(".create-form").on("submit", function(event) {
 //    // Make sure to preventDefault on a submit event.
 //    event.preventDefault();

 //    var newCat = {
 //      name: $("#ca").val().trim(),
 //      sleepy: $("[name=sleepy]:checked").val().trim()
 //    };

 //    // Send the POST request.
 //    $.ajax("/api/cats", {
 //      type: "POST",
 //      data: newCat
 //    }).then(
 //      function() {
 //        console.log("created new cat");
 //        // Reload the page to get the updated list
 //        location.reload();
 //      }
 //    );
 //  });