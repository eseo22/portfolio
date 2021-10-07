$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType:"json",
    data:{
        api_key:"c3497ae54a8e80023a954c8815e7b28e",
        per_page:8,
        format:"json",
        nojsoncallback:1,
        privacy_filter:5,
        tags : "landscape"
    }

})

.success(function(data){
    console.log(data.photos.photo);
    let items = data.photos.photo;

    $("#gallery").append("<ul>");
    $(items).each(function(index, data){
        let text = data.title;
        if(!data.title){
            text = "No description in this photo";}

        $("#gallery ul")
            .append(
                $("<li>")
                    .append(
                        $("<a>").attr({href:"https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"})

                        .append(
                            $("<img>").attr({
                                src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                            })
                        )

                    )
                    .append(
                        $("<p>").text(text)
                    )
            )
    })
})
