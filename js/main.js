///////////Back to up////////
const backBtn = document.getElementById("backToTop")
window.addEventListener("scroll", function () {
    if (window.scrollY >= 400) {
        backBtn.classList.remove("d-none")
    }
    else {
        backBtn.classList.add("d-none")
    }
});
backBtn.addEventListener("click",function(){
    window.scrollTo({top:0,behavior:"smooth"});
});
///////close Icon//////

document.getElementById("closeNotice").addEventListener("click",function(){
    let notice = document.getElementById("storeNotice");
    notice.style.display = "none";
});
////////////search
 const searchContainer = document.getElementById("searchContainer");
 const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const popularBox = document.getElementById("popularBox");
    function showPopular() {
      popularBox.style.display = "block";
    }
searchInput.addEventListener("click", function(e) {
  e.stopPropagation(); 
  showPopular();
});
searchBtn.addEventListener("click", function() {
  showPopular();
});
document.addEventListener("click", function(e) {
    popularBox.style.display = "none";
});
/////////////////////validation
