$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType: "json",
    data:{
        api_key: "c3497ae54a8e80023a954c8815e7b28e",
        per_page:15,
        format:"json",
        nojsoncallback:1,
        privacy_filter:5,
        tags:"landscape"
    }
})

.success(function(data){
    
    let items = data.photos.photo;
    console.log(items);

    $("#gallery").append("<ul>");

    $(items).each(function(index, data){
        $("#gallery ul")
            .append(
                $("<li>")
                    .append(
                        $("<a>").attr({href:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"})
                            .append(
                                $("<img>").attr({src:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"})
                            ),
                        
                        $("<p>").text(data.title),

                        $("<div class='profile'>")
                            .append(
                                $("<img>").attr({src:"https://www.flickr.com/buddyicons/"+data.owner+".jpg"}),
                                $("<span>").text(data.owner)
                            )
                
                    )
            )
    })
    
})

.error(function(err){
    console.error(err);
})

$("body").on("click", "#gallery ul li", function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");

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