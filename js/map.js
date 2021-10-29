//지도생성
const container = document.getElementById('map');
const branch_btns = document.querySelectorAll(".branch li");
const options = {
    center: new kakao.maps.LatLng(37.5109446,127.0567967), 
    level: 3
};
    
const map = new kakao.maps.Map(container, options);

const markerOptions = [
    
    { 
        title: "본점", 
        latlng : new kakao.maps.LatLng(37.5109446,127.0567967), 
        // imgSrc : "img/marker1.png", 
        // imgSize : new kakao.maps.Size(232, 99),
        // imgPos : {offset: new kakao.maps.Point(128, 99)}, 
        button :  branch_btns[0]
        },
        {
        title: "지점1", 
        latlng : new kakao.maps.LatLng(37.507099922888266,126.75640469886633), 
        // imgSrc : "img/marker2.png", 
        // imgSize : new kakao.maps.Size(232, 99),
        // imgPos : {offset: new kakao.maps.Point(116, 99)}, 
        button :  branch_btns[1]
        },
        {
        title: "지점2",  //37.529852,126.9646949
        latlng : new kakao.maps.LatLng(37.52964557140191,126.96444186998666), 
        // imgSrc : "img/marker3.png", 
        // imgSize : new kakao.maps.Size(232, 99),
        // imgPos : {offset: new kakao.maps.Point(116, 99)}, 
        button :  branch_btns[2]
        }
    
];



    
for (let i = 0; i < markerOptions.length; i ++) {
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    new kakao.maps.Marker({
        map:map,  
        position:markerOptions[i].latlng, 
        title:markerOptions[i].title, 
        image : markerImage, // 마커 이미지 
    });

    markerOptions[i].button.onclick = function(){
        moveTo(markerOptions[i].latlng);

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");
    }
}
function moveTo(target) {            
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = target;
    
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
 } 
 
 
 //브라우저 사이즈를 변경할 때 마커이미지와 지도 중심 가운데로 유지 
 window.onresize = ()=>{
    //활성화된 버튼의 data-index값 구하기  
    var active_btn = document.querySelector(".branch li.on"); 
    var active_index = active_btn.getAttribute("data-index"); 
    console.log(active_index); 
    map.setCenter(markerOptions[active_index].latlng)
 }
 
 

