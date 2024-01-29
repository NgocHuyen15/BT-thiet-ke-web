var img = [];
var curimg = 0;

function load_images() {
  for (i = 1; i < 5; i++) {
    img[i] = new Image();
    img[i].src = "anh/anh" + i + ".jpg";
  }
}

function next() {
  curimg++; 
  if (curimg >= img.length) { 
    curimg = 0; 
  }
  document.getElementById("image").src = img[curimg].src;
}

function back() {
  curimg--;
  if (curimg < 0) {
    curimg = img.length - 1;
  }
  document.getElementById("image").src = img[curimg].src;
}
