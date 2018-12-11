
console.log("home")
//on load photos
window.onload = function (){
   
  }
//googlemap
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(42.426502, 19.243673),
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
     var imgs = document.getElementsByClassName('animation-img');
    console.log(imgs.length);
    var i;
    delayInc = 1.5;
    delay = 0;
    for (i = 0; i < imgs.length; i++){
      imgs[i].style.transition='all .5s ' + delay + 's';
      imgs[i].style.opacity=1;
      delay = delay + delayInc;
    }
    
  }

//grid list work


function opengridlist(type,elmnt,color) {
    console.log(type);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("photocontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  document.getElementById(type).style.display = "block";


}


//filter

function filter(type,elmnt,color) {
   
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("each-item");
  for (i = 0; i < tabcontent.length; i++) {
    
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName(type);
   console.log(tablinks.length);
    if(tablinks.length == 0){
      var nothing =document.getElementsByClassName("nothing");
        
        for (i = 0; i < nothing.length; i++) {  
                nothing[i].style.display = "block";
                }
    }
   for (i = 0; i < tablinks.length; i++) {  
    tablinks[i].style.display = "block";
  }
    


}







  
