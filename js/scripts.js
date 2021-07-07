let container = $('.list-container');
let submitBtn = $('<button type="button" id="submit">Add Task</button>');

container.append(submitBtn);

function addItem() {
    let li = $('<li id="item"></li>');
    let inputValue = $('#input').val();

    //add close X
    li.each(function (i) {
        let closeItem = $('<button>X</button>');
    closeItem.addClass('close');

    li.append(closeItem);

    //Remove list item

closeItem.on('click', function() {
    li.remove();
});
    });
    li.addClass('Strike');
    li.append(inputValue);
    

if (inputValue === "") {
    alert("Please Enter Task!");
  } else {
    $("#list").append(li);
  }

  //Cross-out function

li.on("dblclick", function() {
    li.toggleClass("strike");
  });
};
//Add new list item on click or Enter

function submitTask() {
    submitBtn.on('click', function() {
        addItem();
        $('#input').val(null);
    });

$(document).ready(function() {
    $(window).keydown(function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        addItem();
        $('#input').val(null);
          return false; 
        }
      });
});
}

submitTask();