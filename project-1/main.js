alert("Read this information after that action")
var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details){
        var  rectlocation = rect.getBoundingClientRect();
        var insiderectval = details.clientX - rectlocation.left;
        if(insiderectval < rectlocation.width / 2){
           var redcolor = gsap.utils.mapRange(
                1,
                rectlocation.width / 2,
               250, 
                1, 
                insiderectval
        );
           gsap.to(rect,{
            backgroundColor: `rgb(${redcolor},0 ,0 )`, 
            ease: Power4,
           });
        }else{
                var bluecolor = gsap.utils.mapRange(
                        rectlocation.width/2,
                        rectlocation.width,
                       0, 
                        250, 
                        insiderectval
                );
                   gsap.to(rect,{
                    backgroundColor: `rgb(0 ,0,${bluecolor} )`, 
                    ease: Power4,
                   });
        }
});
rect.addEventListener("mouseleave", function(){
     gsap.to(rect, {
                backgroundColor:"white",
        })
});