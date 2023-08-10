$(document).ready(function () {
    let addItem = function () {
      var toAdd = $("input[name=ListItem]").val();
      $("input[name=ListItem]").val("");
  
      var li = $("<li>" + toAdd + "</li>");
      var closeBtn = $("<span class='closeIt'>X</span>");
      closeBtn.on("click", function () {
        li.remove();
      });
      li.append(closeBtn);
  
      $("ul").append(li);
    };
  
    let btn = $("#button");
    btn.on("click", addItem);
  
    $("input[name=ListItem]").on("keypress", function (e) {
      if (e.which == 13) {
        addItem();
      }
    });
  });
  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike");
  });
  
  $("input").focus(function () {
    $(this).val("");
  
    $("ul").sortable();
  });
  