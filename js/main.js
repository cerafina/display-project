

//on load photos
window.onload = function (){
    var imgs = document.getElementsByClassName('animation-img');
    console.log(imgs);
    var i;
    delayInc = 1.5;
    delay = 0;
    for (i = 0; i < imgs.length; i++){
      imgs[i].style.transition='all .5s ' + delay + 's';
      imgs[i].style.opacity=1;
      delay = delay + delayInc;
    }
  }
//googlemap
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
// grid list photo vue

//modal video

//function tab

function opentab(Tabs,elmnt,color) {
    console.log(Tabs);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  document.getElementById(Tabs).style.display = "block";


}
// Get the element with id="defaultOpen" and click on it



window.onload = function (){
   document.getElementById("defaultOpen").click();
    
  }



  
