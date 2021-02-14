

    new Gradientify({
        element: document.getElementById('introgra'),
        gradients: [
          `linear-gradient(60deg, rgb(255, 0, 0), rgb(0, 0, 255))`,
          `linear-gradient(60deg, rgb(25, 123, 23), #ff22af)`
        //   `radial-gradient(rgb(25, 123, 223), red)` // All valid CSS gradients are supported
        ],
        fixed: false,
        delay: 0, 
        interval: 5000
    })
    window.onload = function (){
      // gsap to load the elments into the page
    let animation = gsap.timeline();
    animation.fromTo('#titleName', {
        opacity: 0,
        top: "40%"
    },{
        opacity: 1,
        top: "30%",
        duration: .5,
        delay: .5
    })
    .fromTo('#titleAbout', {
        opacity: 0,
        scale: 0
        // top: "70%"
    },{
        opacity: 1,
        // top: "53%",
        scale: 1,
        duration: .5,
        delay: 1
    })
    .fromTo('#introgra', {
        opacity: 1,
    },{
        opacity: 0,
        duration: .5
    })
    .fromTo('main', {
        opacity: 0,
    },{
        opacity: 1,
        duration: 1
    })
    .fromTo('#homePage img', {
        opacity: 0,
        left: "70%"
    },{
        opacity: 1,
        left: "45%",
        duration: 1,
    })
    .fromTo('#intro h2', {
        opacity: 0
    },{
        opacity: 1,
        duration: .25
    })
    .fromTo('#intro h1', {
        opacity: 0
    },{
        opacity: 1,
        duration: .25
    })
    .fromTo('#intro h3', {
        opacity: 0
    },{
        opacity: 1,
        duration: .25
    })
    .fromTo('#intro section', {
        opacity: 0
    },{
        opacity: 1,
        duration: .25
    })
    .fromTo('header', {
        opacity: 0
    },{
        opacity: 1,
        duration: .5
    });
}

var navOffset = $("header").innerHeight() + 10;
     // function that runs as user scrolls /////////////////////////////
$(window).scroll(function(){
    
    var contentpostop = $(this).scrollTop() + navOffset + 500;
    
    //higlighting nav when in section
    // $("section").each(function(){
        
    //     var secpostop=$(this).offset().top;
    //     var secposbot=secpostop + $(this).innerHeight();
    //     var secid= $(this).attr("id");
        
    //     if(contentpostop >= secpostop && contentpostop <= secposbot){
    //         $("nav a[href='#" + secid + "']").addClass("active");
            
    //         }else{
    
    //             $("nav a[href='#" + secid + "']").removeClass("active");
        
    //         }
    // });
       //reveal content as you scroll 
    $(".reveal").each(function(){
        var botele = $(this).offset().top + $(this).innerHeight();
        var botwin = contentpostop + $(window).height() - navOffset;
        
        if(botele < botwin){
            $(this).animate({
                opacity: 1,
                marginTop: "3%"
            }, 500);
        }
        
    });
});