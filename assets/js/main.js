
let windowHeight = $(window).height()


$('.main').height(windowHeight)



$('.black').sortable({
    connectWith: '.black',
    update: function(event, ui) {
      var changedList = this.id;
      var order = $(this).sortable('toArray');
      var positions = order.join(';');
  
     
    }
  });





  $('#blackBtn').click(function(){
      let x = Math.floor((Math.random() * 6) + 1);
      let y = Math.floor((Math.random() * 6) + 1);

      console.log(x,y)
  
  })
   
  
  
  
 