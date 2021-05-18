$(document).ready(function () {
  let imageUrl;
  let image123;
  var file;

  $("#image").change(function (e) {
     file= e.target.files[0];
    image123 = URL.createObjectURL(file);
    readImage(file)
  });

  function readImage(file){
    if (file.type && file.type.indexOf('image') === -1) {
        alert("file is not an image")
        return;
      }
    
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        imageUrl = event.target.result;
        // console.log(imageUrl)
      });
      reader.readAsDataURL(file);
  }

  // $("#myForm").submit(function (e) {
  //   e.preventDefault();
  //   //imageUrl = $("#url").val();
    

  // });
  document.getElementById("btn_submit").addEventListener("click", function() {
    convertImage(imageUrl);
  });


  




  function convertImage(imageUrl) {

      $("#myCanvasdiv")[0].classList.add("myCanvasdiv1");

    var myImage = new Image();
    myImage.src = image123;

    var myCanvas = document.getElementById("myCanvas");
    var myContext = myCanvas.getContext("2d"); 
    myCanvas.width = myImage.width; 
    myCanvas.height = myImage.height; 
    myContext.drawImage(myImage,0,0);

   
  }

  document.getElementById("btn_down").addEventListener("click", function() {
    down(imageUrl);
  });
  document.getElementById("myCanvas").addEventListener("click", function() {
      down(imageUrl);
    });


  function down(imageUrl) {


 var imageType = $("#format option:selected").text();
    if (browserImageCoverter.downloadImageWithType(imageUrl, imageType)) {
    } 

  }

});
