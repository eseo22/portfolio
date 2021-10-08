$.ajax({
    url:"https://www.googleapis.com/youtube/v3/playlistItems",
    dataType :"jsonp",
    data:{
        part:"snippet",
        key:"AIzaSyBV00UM1Z3KR6sj0aucOKHTErQ8BZl-fMk",
        maxResults : 5,
        playlistId : "PLOeezfJjSXUGdB0j2f6O3SOc7RbXfUF6O"
    }
})

.success(function(data){
    //console.log(data);
    let items = data.items;
    console.log(items);

    $(items).each(function(index, data){

        

        $(".youtube .inner #vidgallery")
            .append(
                $("<article>")
                    .append(
                        $("<a>").attr({href:data.snippet.resourceId.videoId})
                            .append(
                                $("<img>").attr({src:data.snippet.thumbnails.high.url})
                            ),
                        $("<div class='con'>")
                            .append(
                                $("<h2>").text(data.snippet.title),
                                $("<p>").text(data.snippet.description),
                                $("<span>").text(data.snippet.publishedAt)
                            )
                    )                
                )


    });

})

.error(function(err){
    console.error(err);
})