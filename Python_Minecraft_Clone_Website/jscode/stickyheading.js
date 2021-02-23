function initsticky (e) {
  window.onscroll = function() {scrollFuncton()};
  
  var header = document.getElementById("mainHeader");
  var sticky = header.offsetTop;
  
  function scrollFuncton() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}