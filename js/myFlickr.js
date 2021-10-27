$.ajax({
    //url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    url:"https://www.flickr.com/services/rest/?method=flickr.people.getPhotos",
    dataType: "json",
    data:{
        api_key: "c3497ae54a8e80023a954c8815e7b28e",
        per_page:5,
        format:"json",
        nojsoncallback:1,
        privacy_filter:1,
        user_id : "82828410@N02"
        //tags:"landscape"
    }
})

.success(function(data){
    
    let items = data.photos.photo;
    console.log(items);

    $("#gallery").append("<ul>");

    $(items).each(function(index, data){
        let text = data.title;        
        if(!data.title){          
            text = "No description in this photo"; 
        }
        $("#gallery ul")
            .append(
                $("<li>")
                    .append(
                        $("<div>").append(
                            $("<a>").attr({
                                href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                            })
                            .append(                            
                                $("<img class='thumb'>").attr({
                                    src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                                })
                            ),
                            $("<p>").text(text),    
                                                   
                            $("<div class='profile'>")
                            .append(
                                $("<span>").text(data.owner)
                            )   
                                                     
                        )
                
                    )
            )
    });

    const total = $("#gallery ul li").length;
    let imgNum = 0;

    $("#gallery img").each(function(index, data){
        
        data.onload = function(){
            imgNum++;
            console.log(imgNum);
            if(imgNum === total){   
                
                $(".loading").addClass("off");

                new Isotope("#gallery ul",{
                    itemSelector : "#gallery ul li",
                    columnWidth: "#galley ul li",                  
                    transitionDuration: "0.5s"
                }); 


            }
        }
        
    });
    
})

.error(function(err){
    console.error(err);
})


$("body").on("click", "#gallery ul li", function(e){
    e.preventDefault();

    $(".pop").remove();

    let imgSrc = $(this).find("a").attr("href");

    $("body")
        .append(
            $("<div class='pop'>")
                .append(
                    $("<img>").attr({src:imgSrc}),
                    $("<span>").text("close")
                )
        )
});

$("body").on("click", ".pop span", function(){
    $(".pop").remove();
});

