$(document).ready(function() {
// add or remove items entered in "buy" or "bought" text box
$("#boughtButton").click(function() {
  var addBought = $("input#bought").val();
  $(".boughtList").append($('<li>' + addBought + '</li><button class="remove">remove</button><button class="buyAgain">buy again!</button>'))
})
// remove items if "remove" button is clicked and item is checked on buy list
$("#buyButton").click(function() {
  var addBuy = $("input#buy").val();
  $(".buyList").append($('<li>' + addBuy + '<button class="remove">remove</button><button class="bought">bought!</button></li>'))
  })
  $("li").on("click", ".remove", function(){
    // remove items if user entered if "remove" button is clicked
    $(this).parent('li').fadeOut("slow");
  });
// move item to bought side if item is checked and "bought!" button is clicked
$(".bought").click(function (){
  $(this).parent('li').children('.bought').removeClass('bought').addClass('buyAgain').text('buy again!');
  $(this).parent('li').appendTo($(".boughtList")); // works, but does not add buttons
});
$(".buyAgain").click(function () {
  console.log("test");
  $(this).parent('li').children('.buyAgain').removeClass('buyAgain').addClass('bought').text('bought!');
  $(this).parent('li').appendTo($(".buyList")); // works, but does not add buttons
})

// move item to buy side if item is checked and "buy again!" button is clicked

})
