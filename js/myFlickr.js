getList({
    type: "interest"
});

//검색어 입력후 클릭
$("#searchBox .search").on("click", function(e){
    e.preventDefault();
    
    $("#gallery ul").removeClass("on");
    $(".loading").removeClass("off");

    var inputs = $("#searchBox input").val();
    $("#searchBox input").val("");
    getList({
        type:"search",
        tag: inputs
    });
});

//검색어 입력후 엔터
$(window).on("keypress", function(e){
    if(e.keyCode == 13){

        $("#gallery ul").removeClass("on");
        $(".loading").removeClass("off");

        var inputs = $("#searchBox input").val();
        $("#searchBox input").val("");
        getList({
                type:"search",
                tag: inputs
            });
    }
})



//리스트 클릭 팝업 생성, span클릭시 팝업 닫기

$("body").on("click", "#gallery ul li", function (e) {
    e.preventDefault();

    $(".pop").remove();

    let imgSrc = $(this).find("a").attr("href");
    console.log(imgSrc);

    $("body")
        .append(
            $("<div class='pop'>")
                .append(
                    $("<img>").attr({ src: imgSrc }),
                    $("<span>").text("close")
                )
        )
});

$("body").on("click", ".pop span", function () {
    $(".pop").remove();
});



function getList(opt) {
    var result_opt = {};

    if (opt.type == "interest") {
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList",
            dataType: "json",
            data: {
                api_key: "c3497ae54a8e80023a954c8815e7b28e",
                per_page: 5,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
            }
        }
    }
    if (opt.type == "search") {
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
            dataType: "json",
            data: {
                api_key: "c3497ae54a8e80023a954c8815e7b28e",
                per_page: 5,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
                tags: opt.tag
            }
        }
    }
    if (opt.type == "userid") {
        result_opt = {
            url: "https://www.flickr.com/services/rest/?method=flickr.people.getPhotos",
            
            dataType: "json",
            data: {
                api_key: "c3497ae54a8e80023a954c8815e7b28e",
                per_page: 5,
                format: "json",
                nojsoncallback: 1,
                privacy_filter: 1,
                user_id: opt.user_id
            }
        }
    }
    $.ajax(result_opt)

.success(function (data) {

        let items = data.photos.photo;
        console.log(items);

        $("#gallery").empty();
        $("#gallery").append("<ul>");

        $(items).each(function (index, data) {
            let text = data.title;
            if (!data.title) {
                text = "No description in this photo";
            }
            $("#gallery ul")
                .append(
                    $("<li>")
                        .append(
                            $("<div>").append(
                                $("<a>").attr({
                                    href: "https://live.staticflickr.com/" + data.server + "/"+ data.id +"_"+ data.secret+ "_b.jpg"
                                })
                                    .append(
                                        $("<img class='thumb'>").attr({
                                            src: "https://live.staticflickr.com/" + data.server + "/" + data.id + "_" + data.secret + "_m.jpg"
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

        $("#gallery img").each(function (index, data) {

            data.onload = function () {
                imgNum++;
                console.log(imgNum);
                
                if (imgNum === total) {

                    $(".loading").addClass("off");

                    new Isotope("#gallery ul", {
                        itemSelector: "#gallery ul li",
                        columnWidth: "#galley ul li",
                        transitionDuration: "0.5s"
                    });

                    $("#gallery ul").addClass("on");
                }
            }

        });

    })

.error(function (err) {
        console.error("error");
    });
}
