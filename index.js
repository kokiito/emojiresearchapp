

//var src[5];
//src[5]={0,0,0,0,0};

var src1="./img/1.svg";
var src2="./img/2.svg";
var src3="⬆️";

function LinkClick1(param) {
  var elem = document.getElementById("image01");
  elem.src = param;
  //src[1] = param;
  src1 =param;
  ViewGIF();
  // console.log(src);
  // console.log(src[1])
}

function LinkClick2(param) {
  var elem = document.getElementById("image02");
  elem.src = param;
  src2 =param;
  ViewGIF();
  // console.log("LC2")
  // console.log(src);
  //console.log("elem.src:" + elem.src)
}

function LinkClick3(param) {
  var elem = document.getElementById("image03");
  elem.textContent = param;
  src3 =param;
  ViewGIF();
  //console.log("elem.src:" + elem.src)
}


function LinkClick4(param) {
  var elem = document.getElementById("image04");
  elem.src = param;
  //console.log("elem.src:" + elem.src)
}

function ViewGIF() {
  var elem = document.getElementById("video");


  if(src1== "./img/4.svg"&& src2 =="./img/1.svg" && src3=="⬆️" ){
    elem.src = "./video/test.mov";
  }
  else if(src1== "./img/4.svg"&& src2 =="./img/1.svg" && src3=="⬆️" ){
    elem.src = "./video/test.mov";
  }
  else{
    elem.src = "";
  }
  // else if (true) {
  //
  // }
  // else if (true) {
  //
  // }
  //
  //
  // var elem = document.getElementById("image04");
  // elem.src = param;
  // //console.log("elem.src:" + elem.src)
}
