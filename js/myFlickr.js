$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    //url:"https://www.flickr.com/services/rest/?method=flickr.interestingness.getList", 
    dataType:"json", 
    data:{
        api_key:"d61e30a1010fe3e1dab106d3a2df0f21", 
        per_page:5, 
        format:"json",
        nojsoncallback:1, //json객체를 감싸고 있는 wrapping 함수를 걷어냄 
        privacy_filter : 5, 
        tags :"landscape" // 검색할 이미지 키워드 입력 - method가 photos.search일 때 (interestingnesss일때는 주석처리)
    }
})