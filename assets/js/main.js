
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





  function random(){
     
    $('.cube1').addClass('cube1Rotate');
    $('.cube2').addClass('cube2Rotate');
    
      setTimeout(function() {
        starting()
        $('.cube1').removeClass('cube1Rotate');
        $('.cube2').removeClass('cube2Rotate');
     }, 2000);
    


    

  
   
  
  }

   
  function starting(){
    
   
  let x = Math.floor((Math.random() * 6) + 1);
  let y = Math.floor((Math.random() * 6) + 1);



  //console.log(x,y)
    if(x == '6'){ $('.cube1').css({transform: 'rotateY(' + 90 + 'deg)'})}
    if(x == '5'){$('.cube1').css({transform: 'rotateX(' + -90 + 'deg)'})}
    if(x == '3'){ $('.cube1').css({transform: 'rotateX(' + 180 + 'deg)'})}
    if(x == '2'){ $('.cube1').css({transform: 'rotateX(' + 90 + 'deg)'})}
    if(x == '1'){$('.cube1').css({transform: 'rotateY(' + -90 + 'deg)'})}
      
    
    if(y == '6'){ $('.cube2').css({transform: 'rotateY(' + 90 + 'deg)'})}
    if(y == '5'){$('.cube2').css({transform: 'rotateX(' + -90 + 'deg)'})}
    if(y == '3'){ $('.cube2').css({transform: 'rotateX(' + 180 + 'deg)'})}
    if(y == '2'){ $('.cube2').css({transform: 'rotateX(' + 90 + 'deg)'})}
    if(y == '1'){$('.cube2').css({transform: 'rotateY(' + -90 + 'deg)'})}
      

  }
 
  


 