function changeColor (color){
    document.dbody.style.backgroundColor = color ;
}
var imageUrls = ['../Image/h1.jpg','../Image/h2.jpg', '../Image/h3.jpg','../Image/pic1.jpg','../Image/pic2.jpg', '../Image/pic3.jpg',
    '../Image/h4.PNG'];                                 
var currentImageIndex = 0;

function changeImage (){
    var imgElement = document.getElementById('img');
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    imgElement.src = imageUrls[currentImageIndex];
}       

function changeImageSize(){
    var imgElement = document.getElementById('img');
    if(imgElement.style.width =='200px'){
        imgElement.style.width = '400px';
    }
    else{
        imgElement.style.width = '200px';
    }
}
