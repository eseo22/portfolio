$.ajax({
    url:"https://www.googleapis.com/youtube/v3/playlistItems",
    dataType :"jsonp",
    data:{
        part:"snippet",
        key:"AIzaSyBV00UM1Z3KR6sj0aucOKHTErQ8BZl-fMk",
        maxResults : 6,
        playlistId : "PLOeezfJjSXUGdB0j2f6O3SOc7RbXfUF6O"
    }
})

.success(function(data){
    //console.log(data);
    let items = data.items;
    console.log(items);

    $(items).each(function(index, data){

        

        let tit = data.snippet.title;
        let titlen = tit.length;
        if(titlen>20){tit=tit.substr(0,20)+"...."}

        let txt = data.snippet.description;
        let len = txt.length;
        if(len>100){txt=txt.substr(0,100)+"...."}
        

        let date = data.snippet.publishedAt;
        date = date.split("T")[0];
        

        $("#vidgallery")
            .append(
                $("<article>")
                    .append(
                        $("<a>").attr({href:data.snippet.resourceId.videoId})
                            .append(
                                $("<img>").attr({src:data.snippet.thumbnails.high.url})
                            ),
                        $("<div class='con'>")
                            .append(
                                $("<h2>").text(tit),
                                $("<p>").text(txt),
                                $("<span>").text(date)
                            )
                    )                
                )


    });

})

.error(function(err){
    console.error(err);
})

$("body").on("click", "#vidgallery article", function(e){
    e.preventDefault();
    let vidId = $(this).children("a").attr("href");
    $("body")
        .append(
            $("<div class='popVideo'>")
                .append(
                    $("<iframe>").attr({
                        src:"https://www.youtube.com/embed/"+vidId,
                        frameborder : 0,
                        width:"100%",
                        height:500
                    }),
                    $("<span>")
                )
            
            )

});
$("body").on("click", ".popVideo", function(){
    $(".popVideo").remove();
});