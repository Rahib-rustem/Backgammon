
let windowHeight = $(window).height()


$('.main').height(windowHeight)



$('.white').sortable({
    connectWith: '.white',
    update: function(event, ui) {
      var changedList = this.id;
      var order = $(this).sortable('toArray');
      var positions = order.join(';');
  
      console.log({
        id: changedList,
        positions: positions
      });
    }
  });
 