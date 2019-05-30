$(window).bind("load", function() { 
       
    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");
        
    positionFooter();
    
    function positionFooter() {
    
             footerHeight = $footer.height();
             footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    
            if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                $footer.css({
                     position: "absolute"
                }).animate({
                     top: footerTop
                })
            } else {
                $footer.css({
                     position: "static"
                })
            }
            
    }

    $(window)
            .scroll(positionFooter)
            .resize(positionFooter)
            
});


window.onload = function() {
 
    alert( "Good news everyone! You have arrived at the page of Amber Jade Gallegos!" );
 
};

$(document).ready(function(){
    $("button").click(function(){
      $.ajax({url: "https://github.com/inkeddrawnfish?tab=repositories", success: function(result){
        $("#div1").html(result);
      }});
    });
  });