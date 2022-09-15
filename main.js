 $(document).ready(function () {

  $(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});


    $('#list-items').html("");
    //localStorage.setItem('listItems', "");
    $('#list-items').html(localStorage.getItem('listItems'));
    

    $('#add').click(function() {
    $('.add-items').css("display","block")});
    $('.add-items').submit(function(event)
    {

      event.preventDefault();

      var item = $('#description').val();
      var auther =$('#auther').val();
      var status =$('input[name=status]:checked').val();
     
      if(status=="New"){
      if(item)
     {
     
      $('#list-items').append(" <li class='list-group-item'><div class='todo-indicator bg-focus'></div><div class='widget-content p-0'><div class='widget-content-wrapper'><div class='widget-content-left mr-2'><div class='custom-checkbox custom-control'> <input class='custom-control-input' id='exampleCustomCheckbox1' type='checkbox'> <label class='custom-control-label' for='exampleCustomCheckbox1'>&nbsp;</label></div></div><div class='widget-content-left'>" +
        "<div class='widget-heading'>"+ item + "</div>"+"<div class='widget-subheading'> <div class='badge badge-pill badge-info ml-2'>New</div> <div>" +
         "By "+auther +"</div></div></div></div></div></li>"+
         "<br>"+"<a class='remove'>delete</a><hr></li>");
  
        localStorage.setItem('listItems', $('#list-items').html());
        
       
        $('#description').val("");
        $('#auther').val("");
        $('input[name=status]').prop('checked',false);
      }
   }
  
   else if(status=="Rejected"){
    if(item)
     {
     
     $('#list-items').append("<li class='list-group-item'><div class='todo-indicator bg-warning'></div><div class='widget-content p-0'><div class='widget-content-wrapper'><div class='widget-content-left mr-2'><div class='custom-checkbox custom-control'><input class='custom-control-input' id='exampleCustomCheckbox12' type='checkbox'><label class='custom-control-label' for='exampleCustomCheckbox12'>&nbsp;</label></div></div><div class='widget-content-left'>" +
      "<div class='widget-heading'>"+ item  +"<div class='badge badge-danger ml-2'>Rejected</div>"+
      "</div>"+"<br>" +"<div class='widget-subheading'>"+"<i>By "+auther +"</i></div></div></div></div></li>" +
      "<br>"+"<a class='remove'>delete</a><hr></li>");
        
        localStorage.setItem('listItems', $('#list-items').html());

        $('#description').val("");
        $('#auther').val("");
        $('input[name=status]').prop('checked',false);
      }
   }
   
   else if(status=="completed"){
    if(item)
     {
     
        $('#list-items').append("<li class='list-group-item'><div><div class='green'></div> <input class='checkbox' type='checkbox'/>"+
          "<div class='text' >"+  item  +"<div class='greenREC'>Completed</div>" +"</div>" +"<br>"+"<div class ='auther'>"+"By "+auther +"</div>"+"<br>"+"<a class='remove'>delete</a><hr></li>");
        
        localStorage.setItem('listItems', $('#list-items').html());

        $('#description').val("");
        $('#auther').val("");
        $('input[name=status]').prop('checked',false);
      }
   }
   else{

   }
    
    });
    
     $(document).on('change', '.checkbox', function()

    {
      if($(this).attr('checked'))
      {
        $(this).removeAttr('checked');

      }

      else
     {
        $(this).attr('checked', 'checked');
      }

      $(this).parent().toggleClass('completed');
      localStorage.setItem('listItems', $('#list-items').html());

    });

    $(document).on('click', '.remove', function()

    {
      $(this).parent().remove();
      localStorage.setItem('listItems', $('#list-items').html());
    });
    $(document).on('click', '.remove', function()

   {
    $(this).parent().remove();
     localStorage.setItem('listItems', $('#list-items').html());
  

  });