// Get all svg paths with class 'region'
var regions = document.getElementsByClassName("region");
// get the region selection dropdown
var selection = document.getElementById('dropdown');

// Region selected on map
for (var i = 0; i < regions.length; i++) (function(i){ 
  
  regions[i].onclick = function() {
    //what happens to non-selected regions
    for (var j = 0; j < regions.length; j++) {
      regions[j].style.fill = '';
      regions[j].classList.remove('active');
    }
    
    //what happens to selected region
    
    // on map
    regions[i].style.fill = "white";
    regions[i].classList.add('active');
    
    //select region from map-selection in dropdown
    for (var h = 0; h < selection.length; h++) {
        if(selection.options[h].value == regions[i].id)
        {
          selection.selectedIndex = h;
        };
    }
    
    // Redirect to the appropriate region's emergency contacts page
    window.location.href = regions[i].id + ".html";
  };
})(i);

// Dropdown select to trigger region change
selection.onchange = function() {
  for (var i = 0; i < regions.length; i++) (function(i){ 

      var h = selection.selectedIndex;
      if(selection.options[h].value == regions[i].id)
        {
          //what happens to selected region on map
          regions[i].style.fill = "rgb(24, 155, 32)";
          regions[i].classList.add('active');
        }
      else {
        regions[i].style.fill = '';
        regions[i].classList.remove('active');
      }
  })(i);
};
